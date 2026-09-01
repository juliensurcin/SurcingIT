import {
  createStart,
  createCsrfMiddleware,
  createMiddleware,
} from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// Applied to every response (page loads and server-fn calls alike), since
// there's no reliable way to set platform-level response headers here: the
// build wrapper (@lovable.dev/vite-tanstack-config) only exposes a narrow
// nitro passthrough (preset/output/cloudflare — no routeRules), and the
// actual deploy target is itself ambiguous (vite.config.ts's nitro preset
// defaults to Cloudflare, but the legal notice names Vercel as the host) —
// a platform-specific headers file (_headers / vercel.json) would silently
// do nothing if the app ends up on the other platform. A request middleware
// works regardless of where this is deployed.
// script-src needs 'unsafe-inline': TanStack Start injects an inline
// bootstrap <script> (the SSR hydration payload, window.$_TSR) on every
// page — its content is per-request, so it can't be pinned with a static
// sha256 hash, and there's no per-request nonce wired through this app yet.
// The framework does support one (`router.options.ssr.nonce`, read and
// applied to every script tag it renders — confirmed in
// @tanstack/react-router's Scripts.tsx and router-core's ssr-server.js),
// but threading a fresh nonce from this middleware into src/router.tsx's
// `getRouter()` needs request-scoped context this app doesn't have wired
// (getRouter takes no request/context argument today). Verified live via
// Playwright that without this, every page fails to hydrate at all
// (`Invariant failed: Expected to find bootstrap data on window.$_TSR`) —
// a broken site is a worse outcome than this one narrowed carve-out.
// Everything else in this policy (no external script hosts, no framing,
// no base-tag/form-action hijacking) still holds.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' https://cdn.simpleicons.org data:",
  "connect-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS: Record<string, string> = {
  "Content-Security-Policy": CSP,
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // Site collects nothing and has no use for these; disabling them also
  // reinforces the "no tracking" claim already made in the privacy policy.
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

const securityHeadersMiddleware = createMiddleware().server(
  async ({ next }) => {
    const result = await next();
    const response = "response" in result ? result.response : result;
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      response.headers.set(key, value);
    }
    return result;
  },
);

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [
    securityHeadersMiddleware,
    errorMiddleware,
    csrfMiddleware,
  ],
}));
