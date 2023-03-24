import path from "path";
import vue from "@vitejs/plugin-vue";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin(), svgLoader()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
});
