module.exports = {
	env: {
		jest: true,
		"jest/globals": true,
		browser: true,
		node: true
	},
	rules: {
		"unicorn/consistent-function-scoping": "off",
		"unicorn/no-null": "off",
		"unicorn/no-unreadable-array-destructuring": "off",
		"unicorn/prefer-node-protocol": "off"
	},
	plugins: ["jest"],
	extends: ["./.eslintrc.node.cjs", "plugin:jest/recommended", "../../.eslintrc.cjs"]
};
