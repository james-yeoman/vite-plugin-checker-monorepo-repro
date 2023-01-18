import { defineConfig } from "vite";
import { cfg } from "@repro/config/viteconfig";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = cfg(__dirname);
  config.server.port = 3000;

  return config;
});
