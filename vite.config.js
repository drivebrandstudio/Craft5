import liveReload from "vite-plugin-live-reload";
import viteCompression from "vite-plugin-compression";

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: "./web/dist/",
    sourcemap: true,
    rollupOptions: {
      input: { app: "/src/js/app.js", css: "/src/scss/main.scss" },
      output: { sourcemap: true },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
  plugins: [liveReload(["./templates/**/*", "./src/**/*"]), viteCompression()],
});
