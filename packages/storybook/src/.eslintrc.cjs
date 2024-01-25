/* eslint-disable unicorn/prefer-module */
module.exports = {
	env: {
		browser: true
	},
	extends: ["../../../configurations/eslint/.eslintrc.react.cjs", "../../../.eslintrc.cjs"],
	overrides: [
		{
			files: ["**/*.stories.ts?(x)", "**/*.stories.js?(x)"],
			rules: {
				"no-restricted-syntax": ["off"]
			},
			extends: ["plugin:storybook/recommended"]
		}
	]
};
