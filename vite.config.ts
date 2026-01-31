import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import postcssUrl from "postcss-url";

export default defineConfig(({ mode }) => ({
  plugins: [react(), viteSingleFile()],
  base: "/apps/note-app/",
  build: {
    minify: mode === "production",
    cssMinify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    emptyOutDir: false,
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [postcssUrl({ url: "inline" })],
    },
  },
}));

