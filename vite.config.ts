// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only, defaults to a cloudflare-module preset), VITE_* env injection, @ path
//     alias, React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploy target is Vercel. This overrides the wrapper's cloudflare-module default so the
  // build targets Vercel's Build Output API (Node function) instead of a Workers-shaped bundle.
  nitro: { preset: "vercel" },
  vite: {
    build: {
      rollupOptions: {
        // Forces the whole SSR bundle into one file instead of per-route chunks. Without this,
        // Rolldown's code-splitting can place a shared runtime helper (__exportAll) in a chunk
        // that circularly depends on a chunk that needs it before it's initialized — a known
        // upstream bug (rolldown/rolldown#8809, still unresolved as of rolldown 1.2.6) that
        // crashes every request with "TypeError: __exportAll is not a function". Reproduced and
        // confirmed fixed locally by invoking the built Vercel function directly with Node.
        output: { inlineDynamicImports: true },
      },
    },
  },
});
