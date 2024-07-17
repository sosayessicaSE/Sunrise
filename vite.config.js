import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Sunrise/", // Ensure this matches the repository name
  plugins: [react()],
});
