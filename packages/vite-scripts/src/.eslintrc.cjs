module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: ["../../../configurations/eslint/.eslintrc.node.cjs", "../../../.eslintrc.cjs"],
	rules: {
		"node/no-extraneous-import": [
			"error",
			{
				allowModules: ["@svgr/rollup", "@vitejs/plugin-react-swc", "vite"]
			}
		]
	}
};
