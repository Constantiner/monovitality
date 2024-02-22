import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { App } from "../src/app";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}))
});

describe("App Domain", () => {
	describe("App behavior", () => {
		it("should run", () => {
			expect(true).toBe(true);
		});

		it("should render", () => {
			render(<App />);
			expect(true).toBeTruthy();
		});
	});
});
