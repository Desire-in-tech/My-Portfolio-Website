import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { seoPlugin } from "./src/plugins/seo";

export default defineConfig({
  plugins: [react(), seoPlugin()],
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
