import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.scss",
                "resources/js/app.js",
                "resources/js/index.jsx",
                "resources/js/owner-index.jsx",
                // "resources/js/index-user-login.jsx",
            ],
            refresh: true,
        }),
        react(),
    ],
});
