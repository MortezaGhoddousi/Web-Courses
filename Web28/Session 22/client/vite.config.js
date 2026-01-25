import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",

            manifest: {
                name: "باشگاه اسنوکر آریامن",
                short_name: "آریامن",
                description:
                    "سیستم مدیریت میزهای بیلیارد و اسنوکر باشگاه آریامن",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#00bfa5",
                orientation: "portrait",
                icons: [
                    {
                        src: "/icons/icon72_rounded.png",
                        sizes: "72x72",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon96_rounded.png",
                        sizes: "96x96",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon128_rounded.png",
                        sizes: "128x128",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon144_rounded.png",
                        sizes: "144x144",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon152_rounded.png",
                        sizes: "152x152",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon192_rounded.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon384_rounded.png",
                        sizes: "384x384",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/icons/icon512_rounded.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },

            workbox: {
                navigateFallback: "/index.html",
                globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
            },
        }),
    ],
});
