// @ts-check
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { resolve, sep } from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "vite";

/** @typedef {import("vite").Alias} Alias */
/** @typedef {import("vite").UserConfig} UserConfig */

const FONT_FILES_EXTENSIONS = ["woff2", "woff", "ttf"];

/**
 * @param {string} cwd
 * @returns {readonly Alias[]}
 */
const getFontsAliases = cwd => {
	const componentsSourcePath = resolve(cwd, "../components/src");
	return FONT_FILES_EXTENSIONS.map(extension => ({
		find: new RegExp(`^(.*)\\.${extension}$`),
		replacement: `${resolve(componentsSourcePath, "styles/fonts/")}${sep}$1.${extension}`
	}));
};

/** @typedef {(fileName: string) => Alias} AliasFactory */

/**
 * @param {boolean} isProduction
 * @returns {AliasFactory}
 */
const getProductionAliasFactory =
	isProduction =>
	/** @type AliasFactory */
	fileName => ({
		find: new RegExp(`^(.*)(\\/${fileName})$`),
		replacement: `$1$2${isProduction ? ".production" : ""}`
	});

/** @typedef {(fileNames?: string[]) => readonly Alias[]} AliasesFactory */

/**
 *
 * @param {boolean} isProduction
 * @returns {AliasesFactory}
 */
const getProductionAliasesFactory = isProduction => {
	const getProductionAlias = getProductionAliasFactory(isProduction);
	/** @type {AliasesFactory} */
	return fileNames => (fileNames ? fileNames.map(getProductionAlias) : []);
};

// https://vitejs.dev/config/
/**
 * @param {boolean} isProduction
 * @param {string} cwd
 * @param {string[] | undefined} productionAliases
 * @param {string | undefined} stylesWrapperVariableName
 * @param {string | undefined} base
 * @returns {UserConfig}
 */
export const getViteConfig = (isProduction, cwd, productionAliases, stylesWrapperVariableName, base) => {
	const getProductionAliases = getProductionAliasesFactory(isProduction);
	/** @type {UserConfig} */
	const baseConfig = {
		plugins: [react(), svgr(), splitVendorChunkPlugin()],
		resolve: {
			alias: [
				{
					// this is required for the SCSS modules
					find: /^~(.*)$/,
					replacement: "$1"
				},
				...getProductionAliases(productionAliases),
				...getFontsAliases(cwd)
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
		}
	};
	if (stylesWrapperVariableName) {
		baseConfig.css = {
			preprocessorOptions: {
				scss: {
					additionalData: process.env[stylesWrapperVariableName]
						? `$monovitality-styles-wrapper: "${process.env[stylesWrapperVariableName]}";
						`
						: ""
				}
			}
		};
	}
	if (base) {
		baseConfig.base = base;
	}
	return defineConfig(baseConfig);
};
