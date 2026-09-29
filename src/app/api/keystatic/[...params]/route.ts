import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '../../../../../keystatic.config';

const handlers = makeRouteHandler({
  config: keystaticConfig
});

const notFound = () => new Response('Not Found', { status: 404 });

// Keystatic's local mode has no auth, so its API only exists on a dev server.
const isDevelopment = process.env.NODE_ENV === 'development';

export const GET = isDevelopment ? handlers.GET : notFound;
export const POST = isDevelopment ? handlers.POST : notFound;
