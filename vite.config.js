import viteCompression from "vite-plugin-compression";
import ViteRestart from 'vite-plugin-restart';

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    emptyOutDir: true,
    // Create a manifest.json file for production build, needs to go in same spot as outDir
    manifest: true,
    // Where we want the bundled code to be put
    outDir: "./web/dist/",
    sourcemap: true,
    // Which files should we be minifying
    rollupOptions: {
      input: {
        app: "/src/js/app.ts",
        // Need css here so we can load the css synchronously before the JS and first render, preventing a flicker.
        css: "/src/scss/main.scss",
      },
      output: { sourcemap: true },
    },
  },
  server: {
    // Configure local dev server for DDEV
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
  plugins: [
    // Look at templates and js/scss files for changes while running the dev server for HMR
    ViteRestart({
      reload: ["./templates/**/*", "./src/**/*"],
    }),
    // Minify our JS + SCSS
    viteCompression(),
  ],
});
