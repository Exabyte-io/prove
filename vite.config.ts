/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
    base: "/prove/",
    plugins: [react(), nodePolyfills()],
    define: {
        __dirname: JSON.stringify(__dirname),
    },
    server: {
        port: 3003,
    },
    build: {
        outDir: "build",
        rollupOptions: {
            output: {
                entryFileNames: "main.js",
                chunkFileNames: "[name]-[hash].js",
                assetFileNames: "main.[ext]",
            },
        },
    },
});
