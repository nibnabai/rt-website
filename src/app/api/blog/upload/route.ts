import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { randomUUID } from 'crypto';
import { extname } from 'path';

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif'
};

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get('file') as File | null;
  const slug = form.get('slug') as string | null;
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const ext = extname(file.name).toLowerCase();
  if (!MIME[ext]) {
    return NextResponse.json(
      { error: 'Unsupported file type' },
      { status: 400 }
    );
  }

  const prefix = slug ? `images/blog/${slug}` : 'images/blog/_uploads';

  try {
    const blob = await put(`${prefix}/${randomUUID()}${ext}`, file, {
      access: 'public',
      contentType: MIME[ext],
      cacheControlMaxAge: 31536000
    });
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
