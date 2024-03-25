module.exports = {
	env: {
		browser: true
	},
	extends: ["../../../configurations/eslint/.eslintrc.react.cjs", "../../../.eslintrc.cjs"],
	rules: {
		"no-restricted-syntax": ["off"],
		"react-refresh/only-export-components": ["off"]
	}
};
