import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: "$1"
			},
			{
				// this is required for the fonts
				find: /^(.*)\.woff2$/,
				replacement: `${resolve(dirname(fileURLToPath(import.meta.url)), "../components/src/styles/fonts/")}${sep}$1.woff2`
			},
			{
				// this is required for the fonts
				find: /^(.*)\.woff$/,
				replacement: `${resolve(dirname(fileURLToPath(import.meta.url)), "../components/src/styles/fonts/")}${sep}$1.woff`
			},
			{
				// this is required for the fonts
				find: /^(.*)\.ttf$/,
				replacement: `${resolve(dirname(fileURLToPath(import.meta.url)), "../components/src/styles/fonts/")}${sep}$1.ttf`
			}
		]
	},
	build: {
		assetsDir: "",
		rollupOptions: {
			output: {
				entryFileNames: "[name]-[hash:10].js",
				chunkFileNames: "[name]-[hash:10].js",
				assetFileNames: "[name]-[hash:10].[ext]"
			}
		}
	}
});
