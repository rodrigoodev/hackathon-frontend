import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; //add this line

export default defineConfig({
    plugins: [
        vue(), // write this
    ],
    test: {
        environment: 'happy-dom',
    }
});