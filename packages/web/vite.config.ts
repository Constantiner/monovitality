import { getViteConfig } from "@monovitality/vite-scripts";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { type UserConfig } from "vite";

// https://vitejs.dev/config/
const config = ({ mode }): UserConfig => {
	const isProduction = mode === "production";
	const base = process.env.MONOVITALITY_SPA_BASE_URL || undefined;
	return getViteConfig(
		isProduction,
		dirname(fileURLToPath(import.meta.url)),
		["footerContent", "globalStyles"],
		"MONOVITALITY_STYLES_WRAPPER",
		base
	);
};

export default config;
