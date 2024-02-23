import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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

		it("should render", async () => {
			await act(async () => {
				render(<App />);
			});
			expect(true).toBeTruthy();
		});

		it("should render environment variable", async () => {
			let getByText: typeof screen.getByText<HTMLElement> | undefined;
			await act(async () => {
				const component = render(<App />);
				getByText = component.getByText;
			});
			const environmentVariableParagraph = getByText?.("test-value-for-tests");
			expect(environmentVariableParagraph).toBeInTheDocument();
		});

		it("should render asynchronously loaded footer", async () => {
			let getByRole: typeof screen.getByRole<HTMLElement> | undefined;
			await act(async () => {
				const component = render(<App />);
				getByRole = component.getByRole;
			});
			const footer = await getByRole?.("contentinfo");
			expect(footer).toHaveTextContent("Submodule App Development");
		});
	});
});
