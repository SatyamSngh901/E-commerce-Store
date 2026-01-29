// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
// proxy: {
//   "/api/": "https://e-commerce-store-nrie.vercel.app",
//   "/uploads/": "https://e-commerce-store-nrie.vercel.app",
// },

//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This is ONLY for local development (npm run dev)
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
    },
  },
});