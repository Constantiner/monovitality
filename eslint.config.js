import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import tsParser from "@typescript-eslint/parser";
import pluginImport from "eslint-plugin-import";
import nodePlugin from "eslint-plugin-n";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tsEslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactAccessibility from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";
import jest from "eslint-plugin-jest";

const ecmaVersion = 2022;
const reactFiles = [
	"**/*.{jsx,tsx}",
	"packages/web/src/**",
	"packages/submodule/src/**",
	"packages/components/src/**",
	"packages/site/src/**",
	"packages/storybook/src/**"
];

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tsEslint.config(
	{
		// Top-level ignores aka .eslintignore replacement for flat config
		ignores: [
			".vscode/**",
			"packages/*/dist/**",
			"packages/*/build/**",
			"packages/*/coverage/**",
			"packages/storybook/storybook-static/**",
			"node_modules/**",
			"packages/*/node_modules/**",
			"packages/site/.cache/**",
			"packages/site/public/**"
		]
	},
	js.configs.recommended,
	...tsEslint.configs.recommended,
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
		rules: { "@typescript-eslint/explicit-function-return-type": ["error"] }
	},
	{
		rules: {
			"no-console": ["error"],
			"no-restricted-syntax": [
				"error",
				{
					selector: "ExportDefaultDeclaration",
					message: "Prefer named exports"
				}
			],
			"no-else-return": ["error", { allowElseIf: false }]
		}
	},
	{
		// @stylistic/eslint-plugin-js
		plugins: {
			"@stylistic/js": stylisticJs
		},
		rules: {
			"@stylistic/js/semi": ["error", "always"]
		}
	},
	eslintPluginPrettierRecommended,
	{
		// Unicorn
		...eslintPluginUnicorn.configs["flat/recommended"],
		rules: {
			"unicorn/filename-case": ["error", { case: "camelCase" }],
			"unicorn/no-fn-reference-in-iterator": "off",
			"unicorn/no-reduce": "off",
			"unicorn/no-null": "off",
			"unicorn/switch-case-braces": "off",
			"unicorn/prefer-at": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-array-for-each": "off",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/prefer-node-protocol": "off",
			"unicorn/prefer-object-from-entries": ["off"],
			"unicorn/no-useless-undefined": "off"
		}
	},
	{
		plugins: {
			import: pluginImport
		},
		languageOptions: {
			sourceType: "module",
			ecmaVersion,
			parser: tsParser,
			parserOptions: {
				ecmaVersion
			}
		},
		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": []
			}
		}
	},
	{
		files: ["**/*.cjs"],
		languageOptions: {
			globals: globals.node,
			sourceType: "commonjs"
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
		files: [
			"jest.config*.ts",
			"**/jest.config*.ts",
			"vite.config.ts",
			"**/vite.config.ts",
			"jest.config.ts",
			"**/jest.config.ts",
			"gatsby-config.ts",
			"**/gatsby-config.ts",
			"gatsby-node.ts",
			"**/gatsby-node.ts",
			"gatsby-browser.ts",
			"**/gatsby-browser.ts",
			"eslint.config.js"
		],
		rules: {
			"no-restricted-syntax": ["off"]
		},
		languageOptions: {
			globals: globals.node
		}
	},
	{
		files: [
			"gatsby-config.ts",
			"**/gatsby-config.ts",
			"gatsby-node.ts",
			"**/gatsby-node.ts",
			"gatsby-browser.ts",
			"**/gatsby-browser.ts"
		],
		rules: {
			"unicorn/filename-case": ["off"]
		}
	},
	{
		files: [".eslintrc*.cjs", "**/.eslintrc*.cjs"],
		rules: {
			"n/no-unpublished-require": ["off"],
			"unicorn/prefer-module": ["off"],
			"unicorn/filename-case": ["off"],
			"no-undef": ["off"],
			"no-restricted-syntax": ["off"]
		}
	},
	{
		...nodePlugin.configs["flat/recommended"],
		files: [
			"**/*.cjs",
			"packages/storybook/.storybook/main.ts",
			"packages/types/src/**",
			"packages/vite-scripts/src/**",
			"packages/*/__tests__/**"
		],
		rules: {
			"n/no-unsupported-features/es-syntax": [
				"error",
				{
					ignores: ["modules"]
				}
			],
			"n/no-missing-import": [
				"error",
				{
					tryExtensions: [".js", ".jsx", ".ts", ".tsx"]
				}
			],
			"n/no-unpublished-import": "off",
			"unicorn/import-style": [
				"error",
				{
					styles: {
						"node:path": {
							named: true
						},
						path: {
							named: true
						}
					}
				}
			]
		}
	},
	{
		...reactRecommended,
		files: reactFiles,
		languageOptions: {
			...reactRecommended.languageOptions,
			globals: {
				...globals.browser
			}
		},
		rules: {
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": [2, { ignore: ["children"] }]
		},
		settings: {
			react: {
				version: "detect" // React version. "detect" automatically picks the version you have installed.
				// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
				// default to latest and warns if missing
				// It will default to "detect" in the future
			}
		}
	},
	{
		files: reactFiles,
		plugins: {
			"react-hooks": hooksPlugin
		},
		rules: {
			...hooksPlugin.configs.recommended.rules,
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn"
		}
	},
	{
		files: reactFiles,
		plugins: { "jsx-a11y": reactAccessibility },
		rules: {
			...reactAccessibility.configs.recommended.rules
		}
	},
	{
		files: reactFiles,
		ignores: ["packages/site/src/**"],
		plugins: { "react-refresh": reactRefresh },
		rules: {
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
		}
	},
	{
		files: [
			"packages/storybook/src/**/*.stories.ts?(x)",
			"packages/storybook/src/**/*.stories.js?(x)",
			"packages/site/src/**",
			"packages/storybook/.storybook/**"
		],
		rules: {
			"no-restricted-syntax": ["off"]
		}
	},
	{
		// Jest
		files: ["packages/*/__tests__/**"],
		...jest.configs["flat/recommended"],
		rules: {
			...jest.configs["flat/recommended"].rules,
			"unicorn/consistent-function-scoping": "off",
			"unicorn/no-null": "off",
			"unicorn/no-unreadable-array-destructuring": "off",
			"unicorn/prefer-node-protocol": "off"
		}
	}
);
