import { getViteConfig } from "@monovitality/vite-scripts";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { type UserConfig } from "vite";

// https://vitejs.dev/config/
const config = ({ mode }): UserConfig => {
	const isProduction = mode === "production";
	return getViteConfig(
		isProduction,
		dirname(fileURLToPath(import.meta.url)),
		[],
		"VITE_MONOVITALITY_STYLES_WRAPPER",
		undefined
	);
};

export default config;
