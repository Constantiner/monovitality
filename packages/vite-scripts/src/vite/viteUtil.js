// @ts-check
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { resolve, sep } from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "vite"; // TODO - fix deprecation issue

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
 * Creates a Vite configuration object to use in the Vite build and to share between different applications and/or Storybook.
 *
 * @param {boolean} isProduction - whether the build is for production
 * @param {string} cwd - the current working directory
 * @param {string[] | undefined} productionAliases - the list of file names to search production versions of by adding the `.production` suffix to file names. If undefined, no file names will be suffixed. This is useful for the integration of the React app into an existing application where we need production versions of the files with integration hooks.
 * @param {string | undefined} stylesWrapperVariableName - the name of the environment variable containing the styles wrapper name. We use this to inject the styles wrapper name into the SCSS files building with a custom style wrapper as a namespace in case of integration of the React app into an existing application. If undefined, no additional data will be added to the SCSS files.
 * @param {string | undefined} base - the base path for the application. If undefined, the base path will be the root path.
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
