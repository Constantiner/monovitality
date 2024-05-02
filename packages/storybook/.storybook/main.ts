import { type StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// eslint-disable-next-line unicorn/prefer-module
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, "package.json")));

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-interactions")
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	},
	typescript: {
		reactDocgen: "react-docgen-typescript"
	},
	core: {
		disableTelemetry: true // 👈 Disables telemetry
	}
};

export default config;
