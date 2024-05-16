import { GlobalStyles, IconButton, IconHolder, getFaSvgIcon, getSvgIcon, useTheme } from "@monovitality/components";
import type { Counter } from "@monovitality/submodule";
import classNames from "clsx";
import { Suspense, lazy, useEffect, useState } from "react";
import "./app.scss";
import { ReactComponent as DecrementCounterButton } from "./minus.svg";
import { ReactComponent as faIncrementCounterButton } from "./plus-solid.svg";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as ViteLogo } from "./vite.svg";

const incrementCounterButtonIcon = getFaSvgIcon(faIncrementCounterButton);
const decrementCounterButtonIcon = getSvgIcon(DecrementCounterButton);

const SubmoduleApp = lazy(() =>
	import("@monovitality/submodule").then(module => ({
		default: module.SubmoduleApp
	}))
);

const reactLogoIcon = getSvgIcon(ReactLogo);
const viteLogoIcon = getSvgIcon(ViteLogo);

const defaultCounter = (count: number): number => count;

export const App = (): JSX.Element => {
	const [isDarkTheme] = useTheme();
	const [count, setCount] = useState(0);
	const [incrementCounter, setIncrementCounter] = useState<Counter>(defaultCounter);
	const [decrementCounter, setDecrementCounter] = useState<Counter>(defaultCounter);

	const cssClass = classNames("monovitality-theme-container", {
		"theme-dark": isDarkTheme
	});

	useEffect(() => {
		async function loadCounter(): Promise<void> {
			const { incrementCounter } = await import("@monovitality/submodule");
			setIncrementCounter(() => incrementCounter);
			const { decrementCounter } = await import("@monovitality/submodule");
			setDecrementCounter(() => decrementCounter);
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
						<p>{`Count is ${count}`}</p>
						<div className="card__buttons">
							<IconButton
								size="lg"
								variant="outline"
								onClick={() => setCount(incrementCounter)}
								icon={incrementCounterButtonIcon}
								aria-label="Increment counter"
								title="Increment counter"
							/>
							<IconButton
								size="lg"
								variant="outline"
								onClick={() => setCount(decrementCounter)}
								icon={decrementCounterButtonIcon}
								title="Decrement counter"
								aria-label="Decrement counter"
							/>
						</div>
						<p>
							Edit <code>src/app.tsx</code> and save to test HMR
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
};
