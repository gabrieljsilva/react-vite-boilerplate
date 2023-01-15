// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const APP_HOST = "0.0.0.0";
const APP_PORT = 3000;

export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  server: {
    port: APP_PORT,
    host: APP_HOST,
    hmr: {
      port: APP_PORT,
      host: APP_HOST,
    },
  },
});
