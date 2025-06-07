import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "esnext",
    input: {
      main: resolve(__dirname, "index.html"),
      auth: resolve(__dirname, "auth.html"),
    },
  },
  base: "/relatorio-fotos", // exemplo: '/relatorio-fotos/'
});
