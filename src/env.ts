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
  NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().optional().default('')
});

const server = serverEnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
  NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
  NEXT_PUBLIC_WEBSITE_HOST_URL: process.env.NEXT_PUBLIC_WEBSITE_HOST_URL,
  NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
});

const client = clientEnvSchema.parse({
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
  NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
  NEXT_PUBLIC_WEBSITE_HOST_URL: process.env.NEXT_PUBLIC_WEBSITE_HOST_URL,
  NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
});

export const env = { server, client };
