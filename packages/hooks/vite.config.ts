import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      outDir: "dist/types",
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "", // Specify an empty assetsDir
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: "index.js", // Output a single index.js file
      },
    },
  },
});
