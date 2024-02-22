import viteCompression from "vite-plugin-compression";

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    emptyOutDir: true,
    manifest: true,
    
    // Where we want the bundled code to be put
    outDir: "./web/dist/",
    sourcemap: true,
    
    // Which files should we be minifying
    rollupOptions: {
      input: { app: "/src/js/app.js", css: "/src/scss/main.scss" },
      output: { sourcemap: true },
    },
  },
  server: {
    // I believe this is for DDEV to work 
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
  plugins: [
    ViteRestart({
      reload: ["./templates/**/*", "./src/**/*"],
    }),
    viteCompression()
  ],
});
