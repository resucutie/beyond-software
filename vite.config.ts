import path from "path";
import process from "process";
import { defineConfig } from "vite";

const BASE_URL = "/beyond-software/"

export default defineConfig({
    root: "src",
    publicDir: "../public",
    assetsInclude: ['**/*.md'],
    build: {
        outDir: "../dist"
    },
    resolve: {
        alias: { "/src": path.resolve(process.cwd(), "src") }
    },
    base: BASE_URL
});