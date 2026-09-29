export async function uploadBlogImage(file: File): Promise<string> {
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
