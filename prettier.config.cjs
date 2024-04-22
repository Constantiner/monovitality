module.exports = {
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	trailingComma: "none",
	arrowParens: "avoid",
	overrides: [
		{
			files: ".huskyrc",
			options: { parser: "json" }
		},
		{
			files: ".lintstagedrc",
			options: { parser: "json" }
		},
		{
			files: ".stylelintrc",
			options: { parser: "json" }
		},
		{
			files: "*.yml",
			options: { useTabs: false, tadWidth: 2, printWidth: 40, singleQuote: true }
		},
		{
			files: "*.yaml",
			options: { useTabs: false, tadWidth: 2, printWidth: 40, singleQuote: true }
		},
		{
			files: ".github/workflows/ci.yml",
			options: { useTabs: false, tadWidth: 2, printWidth: 40, singleQuote: true }
		}
	]
};
