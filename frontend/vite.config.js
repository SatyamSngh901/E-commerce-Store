import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
proxy: {
  "/api/": "https://e-commerce-store-nrie.vercel.app",
  "/uploads/": "https://e-commerce-store-nrie.vercel.app",
},

  },
});
