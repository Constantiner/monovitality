import type { Config } from "jest";

const config: Config = {
	verbose: true,
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
		"^.+\\.(ts|tsx)$": [
			"ts-jest",
			// This is a custom transformer that replaces `import.meta` with a custom object for Vite builds
			{
				diagnostics: {
					ignoreCodes: [1343]
				},
				astTransformers: {
					before: [
						{
							path: "ts-jest-mock-import-meta",
							options: {
								metaObjectReplacement: {
									env: {
										VITE_TEST_KEY: "test-value-for-tests"
									}
								}
							}
						}
					]
				}
			}
		]
	},
	moduleNameMapper: {
		"^.+\\.svg$": "jest-svg-transformer",
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	},
	transformIgnorePatterns: ["/node_modules/(?!@react-hook/media-query)/"]
};

export default config;
