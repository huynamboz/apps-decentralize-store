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
      // Bundle React/ReactDOM into the bundle to avoid version conflicts
      // Each micro frontend will have its own React instance
      // This prevents "ReactCurrentDispatcher" errors from multiple React instances
      output: {
        format: "es",
      },
    },
  },
});

