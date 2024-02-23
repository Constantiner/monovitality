module.exports = {
	extends: ["../../../configurations/eslint/.eslintrc.jest.cjs"],
	overrides: [
		{
			files: ["**/*.tsx"],
			settings: {
				node: {
					allowModules: ["@testing-library/react", "@testing-library/jest-dom", "react-dom"]
				}
			},
			extends: ["../../../configurations/eslint/.eslintrc.react.cjs"]
		}
	]
};
