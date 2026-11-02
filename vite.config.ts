import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { seoPlugin } from "./src/plugins/seo";
import { blogChunksPlugin } from "./src/plugins/blogChunks";

function bundleAttributionPlugin(): Plugin {
  return {
    name: "temporary-bundle-attribution",
    apply: "build",
    generateBundle(_options, bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type !== "chunk" || !output.isEntry) continue;
        const modules = Object.entries(output.modules)
          .map(([id, info]) => ({ id, rendered: info.renderedLength, original: info.originalLength }))
          .sort((a, b) => b.rendered - a.rendered)
          .slice(0, 35);
        for (const module of modules) {
          this.warn(`[BUNDLE-ATTRIBUTION] rendered=${module.rendered} original=${module.original} module=${module.id}`);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPlugin(), blogChunksPlugin(), bundleAttributionPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: "0.0.0.0",
  },
  preview: {
    port: Number(process.env.PORT) || 3000,
    host: "0.0.0.0",
  },
});
