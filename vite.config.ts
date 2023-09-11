import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// To refer to @ starting from source
import path from "path"; // Comes from types/node installed earlier

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }], // find and replace the @ sign with "src"
  },
});
