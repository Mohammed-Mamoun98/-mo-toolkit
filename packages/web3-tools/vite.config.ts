import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      //Defines the entry point for the library build. It resolves
      //to src/index.ts,indicating that the library starts from this file.
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "mo-hooks",
      //A function that generates the output file
      //name for different formats during the build
      fileName: (format) => `index.${format}.js`,
    },
    outDir: "dist",
    assetsDir: "", // Specify an empty assetsDir
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
});
