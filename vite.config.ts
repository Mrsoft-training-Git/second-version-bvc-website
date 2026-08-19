// @lovable.dev/vite-tanstack-config already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Images are stored as Lovable asset pointers served from /__l5e/assets-v1/*.
// When the repo runs outside the Lovable sandbox (a local clone), the dev server
// needs a preview host to forward those asset requests to, otherwise every
// image 404s. Default it to this project's preview host so `npm run dev` works
// locally without extra setup; override with LOVABLE_PREVIEW_HOST if needed.
process.env.LOVABLE_PREVIEW_HOST ||=
  "id-preview--e09ad770-7c97-4eb0-8a49-888ff6ec07d1.lovable.app";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
