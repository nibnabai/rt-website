'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { uploadBlogImage } from '@/lib/upload-blog-image';

type Value = { readonly src: string; readonly alt: string };

function safeOnChange(fn: (val: Value) => void, val: Value) {
  setTimeout(() => {
    try {
      fn(val);
    } catch {
      // ProseMirror selection errors are non-fatal
    }
  }, 0);
}

export function BlogImageNodeView({
  value,
  onChange,
  onRemove
}: {
  value: Value;
  onChange(val: Value): void;
  onRemove(): void;
  isSelected: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const srcRef = useRef(value.src);
  srcRef.current = value.src;
  const altRef = useRef(value.alt ?? '');
  altRef.current = value.alt ?? '';

  const src = value.src;
  const alt = value.alt ?? '';
  const hasImage = src?.startsWith('http');

  useEffect(() => {
    const pending = (window as any).__pendingBlogImageUrl;
    if (pending && !hasImage) {
      delete (window as any).__pendingBlogImageUrl;
      safeOnChange(onChangeRef.current, { src: pending, alt: '' });
    }
  }, [hasImage]);

  const handleEditAlt = useCallback(() => {
    const current = altRef.current;
    const result = window.prompt('Alt text (describe the image):', current);
    if (result !== null && result !== current) {
      safeOnChange(onChangeRef.current, {
        src: srcRef.current,
        alt: result
      });
    }
  }, []);

  const handleUpload = useCallback(async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const url = await uploadBlogImage(file);
      safeOnChange(onChangeRef.current, { src: url, alt: altRef.current });
    } catch (e: any) {
      setError(e.message ?? 'Upload failed');
    } finally {
      setUploading(false);
    }
  }, []);

  return (
    <div
      contentEditable={false}
      style={{ margin: '8px 0', userSelect: 'none' }}
    >
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0
        }}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          e.target.value = '';
          handleUpload(f);
        }}
      />

      {hasImage ? (
        <div
          style={{ borderRadius: 8, overflow: 'hidden', background: '#111' }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                maxHeight: 300,
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                display: 'flex',
                gap: 4
              }}
            >
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleEditAlt();
                }}
                style={{
                  padding: '4px 10px',
                  fontSize: 12,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#ccc',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                {alt ? 'Alt ✓' : 'Alt'}
              </button>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  fileRef.current?.click();
                }}
                disabled={uploading}
                style={{
                  padding: '4px 10px',
                  fontSize: 12,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#ccc',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Replace
              </button>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onRemove();
                }}
                style={{
                  padding: '4px 10px',
                  fontSize: 12,
                  background: 'rgba(220,38,38,0.8)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            fileRef.current?.click();
          }}
          disabled={uploading}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '24px 16px',
            border: '2px dashed #444',
            borderRadius: 8,
            cursor: uploading ? 'wait' : 'pointer',
            opacity: uploading ? 0.6 : 1,
            background: '#1a1a2e',
            color: '#888',
            fontSize: 14
          }}
        >
          {uploading ? 'Uploading...' : 'Click to select an image'}
        </button>
      )}

      {error && (
        <span
          style={{
            color: '#f87171',
            fontSize: 12,
            display: 'block',
            marginTop: 4
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
