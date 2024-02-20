import { getViteConfig } from "@monovitality/vite-scripts";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { type UserConfig } from "vite";

// https://vitejs.dev/config/
export default ({ mode }): UserConfig => {
	const isProduction = mode === "production";
	return getViteConfig(
		isProduction,
		dirname(fileURLToPath(import.meta.url)),
		["footerContent", "globalStyles"],
		"MONOVITALITY_STYLES_WRAPPER"
	);
};
