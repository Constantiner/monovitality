module.exports = {
	root: true,
	env: { es2020: true },
	plugins: ["prettier", "unicorn", "import"],
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	ignorePatterns: ["dist"],
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
		ecmaVersion: 2020,
		sourceType: "module"
	},
	rules: {
		semi: ["error", "always"],
		"unicorn/filename-case": ["error", { case: "camelCase" }],
		"no-console": ["error"],
		"unicorn/no-fn-reference-in-iterator": "off",
		"unicorn/no-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/switch-case-braces": "off",
		"no-restricted-syntax": [
			"error",
			{
				selector: "ExportDefaultDeclaration",
				message: "Prefer named exports"
			}
		],
		"unicorn/no-array-reduce": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-object-from-entries": ["off"],
		"unicorn/no-useless-undefined": "off",
		"no-else-return": ["error", { allowElseIf: false }]
	},
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ["@typescript-eslint"],
			extends: ["plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["error"]
			}
		},
		{
			files: ["**/*.d.ts"],
			rules: {
				"@typescript-eslint/triple-slash-reference": ["off"],
				"@typescript-eslint/no-namespace": ["off"],
				"unicorn/prevent-abbreviations": ["off"],
				"no-restricted-syntax": ["off"]
			}
		},
		{
			files: ["jest.config*.(c)js", "**/jest.config*.(c)js", ".eslintrc*.(c)js", "**/.eslintrc*.(c)js"],
			rules: {
				"node/no-unpublished-require": ["off"],
				"unicorn/prefer-module": ["off"],
				"unicorn/filename-case": ["off"],
				"no-undef": ["off"]
			},
			env: {
				commonjs: true,
				node: true
			}
		},
		{
			files: [
				"vite.config.ts",
				"**/vite.config.ts",
				"jest.config.ts",
				"**/jest.config.ts",
				"gatsby-config.ts",
				"**/gatsby-config.ts"
			],
			rules: {
				"unicorn/filename-case": ["off"],
				"no-restricted-syntax": ["off"]
			},
			env: {
				commonjs: true,
				node: true
			}
		},
		{
			files: ["**/*.cjs"],
			env: {
				es2023: true,
				node: true
			}
		}
	],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: {} // this loads <rootdir>/tsconfig.json to eslint
		}
	}
};
