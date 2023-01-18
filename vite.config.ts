import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].widget.js`,
        chunkFileNames: `assets/[name].widget.js`,
        assetFileNames: `assets/[name].widget.[ext]`,
      },
    },
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
})
