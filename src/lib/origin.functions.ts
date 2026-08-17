import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

/**
 * Absolute origin of the current request (e.g. https://surcingit.fr).
 * Used to build absolute social-preview URLs, which crawlers require.
 * Returns "" when no request context is available (build-time prerender).
 */
export const getRequestOrigin = createServerFn({ method: "GET" }).handler(() => {
  try {
    const req = getRequest();
    const host = req.headers.get("host");
    if (!host) return "";
    const proto = req.headers.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}`;
  } catch {
    return "";
  }
});
