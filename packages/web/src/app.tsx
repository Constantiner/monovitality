import { Button, GlobalStyles, IconHolder, getSvgIcon } from "@monovitality/components";
import classNames from "clsx";
import { Suspense, lazy, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import "./app.scss";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as ViteLogo } from "./vite.svg";
import { useMediaQuery } from "@react-hook/media-query";

const SubmoduleApp = lazy(() =>
	import("@monovitality/submodule").then(module => ({
		default: module.SubmoduleApp
	}))
);

type Counter = typeof import("@monovitality/submodule").counter;

const reactLogoIcon = getSvgIcon(ReactLogo);
const viteLogoIcon = getSvgIcon(ViteLogo);

const defaultCounter = (count: number): number => count;

function App(): JSX.Element {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(useMediaQuery("(prefers-color-scheme: dark)"));
	const [count, setCount] = useState(0);
	const [counter, setCounter] = useState<Counter>(defaultCounter);
	useHotkeys("alt+t", () => setIsDarkTheme(previousIsDarkTheme => !previousIsDarkTheme));

	const cssClass = classNames("monovitality-theme-container", {
		"theme-dark": isDarkTheme
	});

	useEffect(() => {
		async function loadCounter(): Promise<void> {
			const { counter } = await import("@monovitality/submodule");
			setCounter(() => counter);
		}
		loadCounter();
	}, []);

	return (
		<div className={cssClass}>
			<GlobalStyles className="monovitality-web-base-container">
				<main className="monovitality-content">
					<div className="logo-container">
						<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
							<IconHolder icon={viteLogoIcon} className="logo" title="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank" rel="noreferrer">
							<IconHolder icon={reactLogoIcon} className="logo react" title="React Logo" />
						</a>
					</div>
					<p>{import.meta.env.VITE_TEST_KEY}</p>
					<h1>Vite + React</h1>
					<div className="card">
						<Button onClick={() => setCount(counter)}>count is {count}</Button>
						<p>
							Edit <code>src/App.tsx</code> and save to test HMR
						</p>
					</div>
					<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
				</main>
				<Suspense fallback="Loading footer…">
					<SubmoduleApp />
				</Suspense>
			</GlobalStyles>
		</div>
	);
}

export { App };
