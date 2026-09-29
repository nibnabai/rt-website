import { z } from 'zod';

const NodeEnvSchema = z.enum(['development', 'production', 'test']);
export type NodeEnvType = z.infer<typeof NodeEnvSchema>;

const clientEnvSchema = z.object({
  NEXT_PUBLIC_POSTHOG_HOST: z.string().optional().default(''),
  NEXT_PUBLIC_POSTHOG_API_KEY: z.string().optional().default(''),
  NEXT_PUBLIC_CDN_URL: z.string().url().optional(),
  NEXT_PUBLIC_WEBSITE_HOST_URL: z.string(),
  NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().optional().default('')
});

const serverEnvSchema = z.object({
  NODE_ENV: NodeEnvSchema,
  NEXT_PUBLIC_POSTHOG_HOST: z.string().optional().default(''),
  NEXT_PUBLIC_POSTHOG_API_KEY: z.string().optional().default(''),
  NEXT_PUBLIC_CDN_URL: z.string().url().optional(),
  NEXT_PUBLIC_WEBSITE_HOST_URL: z.string(),
  NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().optional().default(''),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_S3_BUCKET_NAME: z.string().optional()
});

const server = serverEnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
  NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
  NEXT_PUBLIC_WEBSITE_HOST_URL: process.env.NEXT_PUBLIC_WEBSITE_HOST_URL,
  NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME
});

const client = clientEnvSchema.parse({
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
  NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
  NEXT_PUBLIC_WEBSITE_HOST_URL: process.env.NEXT_PUBLIC_WEBSITE_HOST_URL,
  NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
});

export const env = { server, client };
