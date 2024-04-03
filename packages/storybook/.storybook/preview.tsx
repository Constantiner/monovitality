/* eslint-disable react-refresh/only-export-components */
import { GlobalStyles, addClass, removeClass } from "@monovitality/components";
import { type Decorator, type Preview } from "@storybook/react";
import { useEffect, useState } from "react";
import "./storybookStyles.scss";

const LIGHT_THEME_NAME = "light";
const DARK_THEME_NAME = "dark";

const getMainContainerClass = (className?: string): string => {
	if (!className) {
		return "";
	}
	if (className.startsWith(".")) {
		return className.slice(1);
	}
	return className;
};

const backgrounds = {
	default: window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_THEME_NAME : LIGHT_THEME_NAME,
	values: [
		{
			name: LIGHT_THEME_NAME,
			value: "#F7F7F7"
		},
		{
			name: DARK_THEME_NAME,
			value: "#262626"
		}
	]
} as const;

type BackgroundsConfig = typeof backgrounds;

const WithTheme: Decorator = (Story, context) => {
	const { globals, parameters } = context;
	const globalsBackgroundColor = globals.backgrounds?.value;
	const backgroundsConfig = parameters.backgrounds as BackgroundsConfig;
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);

	const selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main";

	useEffect(() => {
		if (globalsBackgroundColor) {
			const theme = backgroundsConfig.values.find(({ value }) => value === globalsBackgroundColor);
			if (theme?.name) {
				setIsDarkTheme(theme.name === DARK_THEME_NAME);
			}
		}
	}, [backgroundsConfig.values, globalsBackgroundColor]);

	useEffect(() => {
		const mainContainerClassName = getMainContainerClass(import.meta.env.VITE_MONOVITALITY_STYLES_WRAPPER);
		const baseElement = context.canvasElement ?? (selector ? document.querySelector(selector) : document);
		const rootElement = mainContainerClassName
			? baseElement?.querySelector("#themeRoot")
			: document.querySelector(context.viewMode === "docs" ? "#storybook-docs" : "#storybook-root");
		if (rootElement) {
			if (isDarkTheme) {
				addClass(rootElement, "theme-dark");
			} else {
				removeClass(rootElement, "theme-dark");
			}
		}
		if (mainContainerClassName && context.viewMode === "docs") {
			if (isDarkTheme) {
				addClass(document.querySelector("#themeRoot"), "theme-dark");
			} else {
				removeClass(document.querySelector("#themeRoot"), "theme-dark");
			}
		}
	}, [context.canvasElement, context.viewMode, isDarkTheme, selector]);

	return Story();
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /date$/i
			}
		},
		options: {
			storySort: {
				order: ["Monovitality", "Example"]
			}
		},
		backgrounds
	},
	decorators: [
		WithTheme,
		(Story): JSX.Element => {
			const mainContainerClassName = getMainContainerClass(import.meta.env.VITE_MONOVITALITY_STYLES_WRAPPER);
			if (mainContainerClassName) {
				return (
					<GlobalStyles>
						<main className={mainContainerClassName}>
							<section id="themeRoot">
								<Story />
							</section>
						</main>
					</GlobalStyles>
				);
			}
			return (
				<GlobalStyles>
					<Story />
				</GlobalStyles>
			);
		}
	]
};

export default preview;
