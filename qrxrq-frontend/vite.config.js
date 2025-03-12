import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) =>  {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true, // Minify HTML for better performance
                inject: {
                    data: {
                        VITE_API_BASE_URL_PLACEHOLDER: env.VITE_API_BASE_URL,
                    },
                },
            })
        ],
        //base: '/qrxrq/',
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        }
    }
});
