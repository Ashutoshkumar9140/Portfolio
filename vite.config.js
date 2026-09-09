import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // ................. Use relative paths for GitHub Pages .................


  base: "./",
  plugins: [react(), tailwindcss()],
});