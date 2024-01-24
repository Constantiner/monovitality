module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: "module"
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	plugins: ["react-hooks", "react", "jsx-a11y", "react-refresh"],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": [2, { ignore: ["children"] }],
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				controlComponents: ["SamowareSwitch"],
				depth: 6
			}
		],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
	},
	extends: [
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime"
	],
	settings: {
		react: {
			version: "detect" // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// default to latest and warns if missing
			// It will default to "detect" in the future
		}
	}
};
