import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@/": `${process.cwd()}/src/`,
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
