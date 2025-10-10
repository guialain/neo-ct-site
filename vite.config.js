import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5199,     // <-- nouveau port pour éviter les confusions
    strictPort: true,
    hmr: { overlay: false }
  },
});
