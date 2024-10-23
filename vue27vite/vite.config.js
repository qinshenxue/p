import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue2";

import vueJsx from "@vitejs/plugin-vue2-jsx";

const env = loadEnv(process.env.NODE_ENV, process.cwd());
console.log("env: ", env);

/** @type {import('vite').UserConfig} */
export default defineConfig({
    base: env.VITE_PUBLIC_PATH || "/",
    esbuild: {
        drop: ["console"],
    },
    build: {
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "@": "/src",
        },
        extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    plugins: [
        vue(),
        vueJsx({
            include: [/\.jsx?$/],
            // options are passed on to @vue/babel-preset-jsx
        }),
    ],
    server: {},
});
