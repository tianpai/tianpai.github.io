import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

const projectRootDir = resolve(process.cwd());

export default defineConfig({
  plugins: [alias(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
});
