// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    base: "/prove/",
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        }),
        nodePolyfills({
            include: ["path", "process"],
            globals: {
                process: true,
            },
        }),
    ],
    resolve: {
        dedupe: [
            "react",
            "react-dom",
            "@emotion/react",
            "@emotion/styled",
            "@mui/material",
            "@mui/system",
            "@mui/styled-engine",
        ],
    },
    define: {
        __dirname: JSON.stringify(__dirname),
    },
    optimizeDeps: {
        include: ["@mat3ra/wode"],
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
