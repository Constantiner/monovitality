module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		"node/no-unsupported-features/es-syntax": [
			"error",
			{
				ignores: ["modules"]
			}
		],
		"node/no-missing-import": [
			"error",
			{
				tryExtensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		],
		"node/no-unpublished-import": "off",
		"unicorn/import-style": [
			"error",
			{
				styles: {
					path: {
						named: true
					}
				}
			}
		],
		"unicorn/prefer-node-protocol": "off"
	},
	plugins: ["node"],
	extends: ["plugin:node/recommended"]
};
