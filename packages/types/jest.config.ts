import type { Config } from "jest";

const config: Config = {
	verbose: true,
	preset: "ts-jest",
	collectCoverageFrom: [
		"<rootDir>/src/**/*.+(ts|tsx|js|cjs|jsx)",
		"!<rootDir>/src/index.ts",
		"!<rootDir>/src/**/.eslintrc*.+(ts|tsx|js|cjs|jsx)",
		"!<rootDir>/src/**/*.d.ts"
	],
	coverageDirectory: "<rootDir>/coverage/unit/",
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	collectCoverage: false
};

export default config;
