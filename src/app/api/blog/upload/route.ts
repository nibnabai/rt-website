import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
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

function getClient(): S3Client | null {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION) return null;
  return new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  });
}

export async function POST(req: Request) {
  const client = getClient();
  const bucket = process.env.AWS_S3_BUCKET_NAME;
  if (!client || !bucket) {
    return NextResponse.json({ error: 'S3 not configured' }, { status: 500 });
  }

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
  const key = `${prefix}/${randomUUID()}${ext}`;

  const body = Buffer.from(await file.arrayBuffer());
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: MIME[ext],
      CacheControl: 'public, max-age=31536000, immutable'
    })
  );

  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL;
  const url = cdnBase
    ? `${cdnBase}/${key}`
    : `https://${bucket}.s3.amazonaws.com/${key}`;

  return NextResponse.json({ url });
}
