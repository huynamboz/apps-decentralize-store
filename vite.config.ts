import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "remoteEntry.ts",
      formats: ["es"],
      fileName: () => "remoteEntry.js",
    },
    rollupOptions: {
      // Bundle React/ReactDOM completely into the bundle
      // This ensures each micro frontend has its own isolated React instance
      // Prevents "ReactCurrentDispatcher" errors from multiple React instances
      // Empty external array = bundle everything, no external dependencies
      external: [],
      output: {
        format: "es",
      },
    },
    // Ensure all dependencies are bundled
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
