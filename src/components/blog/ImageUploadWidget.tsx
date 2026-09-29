'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

function setNativeInputValue(input: HTMLInputElement, value: string): boolean {
  const nativeSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value'
  )?.set;
  if (!nativeSetter) return false;
  nativeSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
  return true;
}

async function setNativeInputValueWithRetry(
  input: HTMLInputElement,
  value: string
): Promise<boolean> {
  for (let i = 0; i < 5; i++) {
    const ok = setNativeInputValue(input, value);
    if (ok && input.value === value) return true;
    await new Promise((r) => setTimeout(r, 80));
  }
  return input.value === value;
}

function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = useCallback(async (file: File): Promise<string | null> => {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/blog/upload', {
        method: 'POST',
        body: form
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Upload failed');
      }
      return (await res.json()).url;
    } catch (e: any) {
      setError(e.message ?? 'Upload failed');
      return null;
    } finally {
      setUploading(false);
    }
  }, []);

  return { upload, uploading, error };
}

function UploadButton({
  label,
  onUpload,
  preview
}: {
  label: string;
  onUpload: (url: string) => void;
  preview?: string | null;
}) {
  const { upload, uploading, error } = useUpload();
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          e.target.value = '';
          const url = await upload(f);
          if (url) onUpload(url);
        }}
      />
      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{
            width: '100%',
            maxHeight: 180,
            objectFit: 'cover',
            borderRadius: 6,
            marginBottom: 8
          }}
        />
      )}
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={uploading}
        style={{
          padding: '8px 16px',
          fontSize: 13,
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: uploading ? 'wait' : 'pointer',
          opacity: uploading ? 0.6 : 1
        }}
      >
        {uploading ? 'Uploading...' : label}
      </button>
      {error && (
        <span style={{ color: '#f87171', fontSize: 12, marginLeft: 8 }}>
          {error}
        </span>
      )}
    </div>
  );
}

function injectCoverUploadButton(
  containerEl: HTMLDivElement,
  onUrlSet: (url: string) => void
): HTMLInputElement | null {
  const labels = document.querySelectorAll('label, span');
  for (const el of Array.from(labels)) {
    if (el.textContent?.trim() !== 'Cover Image') continue;
    const fieldGroup = el.closest('[class]')?.parentElement;
    if (!fieldGroup) continue;
    const input = fieldGroup.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement | null;
    if (!input) continue;
    const inputWrapper = input.closest('div');
    if (inputWrapper) inputWrapper.style.display = 'none';
    fieldGroup.appendChild(containerEl);
    const val = input.value;
    if (val?.startsWith('http')) onUrlSet(val);
    return input;
  }
  return null;
}

async function uploadFile(file: File): Promise<string> {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch('/api/blog/upload', { method: 'POST', body: form });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? 'Upload failed');
  }
  const { url } = await res.json();
  return url;
}

function replaceInsertButton() {
  const toolbars = document.querySelectorAll('[role="toolbar"]');
  for (const toolbar of Array.from(toolbars)) {
    if (toolbar.getAttribute('data-replaced')) continue;

    let originalBtn: HTMLButtonElement | null = null;
    const buttons = toolbar.querySelectorAll('button');
    for (const btn of Array.from(buttons)) {
      if (btn.textContent?.trim().startsWith('+')) {
        originalBtn = btn;
        break;
      }
    }
    if (!originalBtn) continue;

    toolbar.setAttribute('data-replaced', '1');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    toolbar.appendChild(fileInput);

    const savedOriginalBtn = originalBtn;

    fileInput.onchange = async () => {
      const f = fileInput.files?.[0];
      if (!f) return;
      fileInput.value = '';

      try {
        const url = await uploadFile(f);
        (window as any).__pendingBlogImageUrl = url;
      } catch {
        alert('Image upload failed');
        return;
      }

      savedOriginalBtn.click();

      const tryClick = () => {
        const items = document.querySelectorAll(
          '[role="option"], [role="menuitem"], [role="listbox"] button'
        );
        for (const item of Array.from(items)) {
          const txt = item.textContent?.trim() ?? '';
          if (txt.includes('Blog Image') || txt.includes('Image')) {
            (item as HTMLElement).click();
            return true;
          }
        }
        return false;
      };

      requestAnimationFrame(() => {
        if (!tryClick()) setTimeout(() => tryClick(), 100);
      });
    };

    const newBtn = document.createElement('button');
    newBtn.type = 'button';
    newBtn.title = 'Insert image';
    newBtn.textContent = '+ Image';
    const cs = getComputedStyle(originalBtn);
    newBtn.style.cssText = `
      padding: ${cs.padding};
      font-size: ${cs.fontSize};
      font-family: ${cs.fontFamily};
      background: transparent;
      color: inherit;
      border: none;
      border-radius: ${cs.borderRadius};
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    `;
    newBtn.onclick = () => fileInput.click();

    originalBtn.style.display = 'none';
    originalBtn.insertAdjacentElement('afterend', newBtn);
  }
}

export function ImageUploadWidget() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverContainerRef = useRef<HTMLDivElement>(null);
  const [coverInjected, setCoverInjected] = useState(false);
  const coverInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let stopped = false;

    function tryCoverInject() {
      if (coverInjected || !coverContainerRef.current || stopped) return;
      const input = injectCoverUploadButton(
        coverContainerRef.current,
        setCoverPreview
      );
      if (input) {
        coverInputRef.current = input;
        setCoverInjected(true);
      }
    }

    function onMutation() {
      if (stopped) return;
      tryCoverInject();
      replaceInsertButton();
    }

    tryCoverInject();
    replaceInsertButton();

    const observer = new MutationObserver(onMutation);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      stopped = true;
      observer.disconnect();
    };
  }, [coverInjected]);

  return (
    <div
      ref={coverContainerRef}
      style={{ display: coverInjected ? 'block' : 'none' }}
    >
      <UploadButton
        label={coverPreview ? 'Change Cover Image' : 'Upload Cover Image'}
        preview={coverPreview}
        onUpload={async (url) => {
          setCoverPreview(url);
          if (coverInputRef.current) {
            await setNativeInputValueWithRetry(coverInputRef.current, url);
          }
        }}
      />
    </div>
  );
}
