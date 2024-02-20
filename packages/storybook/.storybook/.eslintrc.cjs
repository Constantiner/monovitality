module.exports = {
	extends: ["../../../configurations/eslint/.eslintrc.node.cjs"],
	rules: {
		"no-restricted-syntax": ["off"]
	},
	overrides: [
		{
			files: ["**/*.tsx"],
			settings: {
				node: {
					allowModules: ["react"]
				}
			},
			extends: ["../../../configurations/eslint/.eslintrc.react.cjs"]
		}
	]
};
