/* eslint-disable react-refresh/only-export-components */
import { GlobalStyles } from "@monovitality/components";
import { type Decorator, type Preview } from "@storybook/react";
import { useEffect, useMemo } from "react";

const LIGHT_THEME_NAME = "light";
const DARK_THEME_NAME = "dark";
const DEFAULT_THEME = LIGHT_THEME_NAME;

const hasClass = (element: Element, className: string): boolean => {
	if (element.classList) {
		return element.classList.contains(className);
	}
	return new RegExp("(\\s|^)" + className + "(\\s|$)").test(element.className);
};

const addClass = (element: Element, className: string): void => {
	if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) {
		element.className += " " + className;
	}
};

const removeClass = (element: Element, className: string): void => {
	if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		const reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
		element.className = element.className.replace(reg, " ");
	}
};

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
	default: DEFAULT_THEME,
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

	const themeName = useMemo(() => {
		let themeName = DEFAULT_THEME;
		if (globalsBackgroundColor) {
			const theme = backgroundsConfig.values.find(({ value }) => value === globalsBackgroundColor);
			themeName = theme?.name ?? DEFAULT_THEME;
		}
		return themeName;
	}, [globalsBackgroundColor, backgroundsConfig]);

	useEffect(() => {
		const mainContainerClassName = getMainContainerClass(import.meta.env.STORYBOOK_SAMOWARE_STYLES_WRAPPER);
		const rootElement = mainContainerClassName
			? document.querySelector("#themeRoot")
			: document.querySelector("#storybook-root");
		if (rootElement) {
			if (themeName === DARK_THEME_NAME) {
				addClass(rootElement, "theme-dark");
			} else {
				removeClass(rootElement, "theme-dark");
			}
		}
	}, [themeName]);
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
			const mainContainerClassName = getMainContainerClass(import.meta.env.STORYBOOK_SAMOWARE_STYLES_WRAPPER);
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
