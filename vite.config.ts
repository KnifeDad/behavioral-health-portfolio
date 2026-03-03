import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/**
 * Vite config — React (SWC) only. Static assets live in public/ and are served at root.
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
});

