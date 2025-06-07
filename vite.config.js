import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
  },
  base: "/", // exemplo: '/relatorio-fotos/'
});
