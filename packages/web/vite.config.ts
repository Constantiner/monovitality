import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, splitVendorChunkPlugin, type Alias, type UserConfig } from "vite";

const componentsSourcePath = resolve(dirname(fileURLToPath(import.meta.url)), "../components/src");

const FONT_FILES_EXTENSIONS = ["woff2", "woff", "ttf"];

const getFontsAliases = (): readonly Alias[] =>
	FONT_FILES_EXTENSIONS.map(extension => ({
		find: new RegExp(`^(.*)\\.${extension}$`),
		replacement: `${resolve(componentsSourcePath, "styles/fonts/")}${sep}$1.${extension}`
	}));

const getProductionAliasFactory =
	(isProduction: boolean) =>
	(fileName: string): Alias => ({
		find: new RegExp(`^(.*)(\\/${fileName})$`),
		replacement: `$1$2${isProduction ? ".production" : ""}`
	});

const getProductionAliasesFactory = (isProduction: boolean): ((fileNames: string[]) => readonly Alias[]) => {
	const getProductionAlias = getProductionAliasFactory(isProduction);
	return (fileNames: string[]): readonly Alias[] => fileNames.map(getProductionAlias);
};

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default ({ mode }): UserConfig => {
	// eslint-disable-next-line no-console
	console.log("process.env.MONOVITALITY_STYLES_WRAPPER", process.env.MONOVITALITY_STYLES_WRAPPER);
	const isProduction = mode === "production";
	const getProductionAliases = getProductionAliasesFactory(isProduction);
	return defineConfig({
		plugins: [react(), svgr(), splitVendorChunkPlugin()],
		resolve: {
			alias: [
				{
					// this is required for the SCSS modules
					find: /^~(.*)$/,
					replacement: "$1"
				},
				...getProductionAliases(["footerContent"]),
				...getFontsAliases()
			]
		},
		build: {
			outDir: "./build",
			assetsDir: "",
			rollupOptions: {
				output: {
					entryFileNames: "[name]-[hash:10].js",
					chunkFileNames: "[name]-[hash:10].js",
					assetFileNames: "[name]-[hash:10].[ext]"
				}
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: process.env.MONOVITALITY_STYLES_WRAPPER
						? `$monovitality-styles-wrapper: "${process.env.MONOVITALITY_STYLES_WRAPPER}";
						`
						: ""
				}
			}
		}
	});
};
