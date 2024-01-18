import { Button, GlobalStyles, IconHolder, getSvgIcon } from "@monovitality/components";
import { Suspense, lazy, useState } from "react";
import "./app.scss";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as ViteLogo } from "./vite.svg";

const SubmoduleApp = lazy(() =>
	import(/* webpackChunkName: "submodule" */ "@monovitality/submodule").then(module => ({
		default: module.SubmoduleApp
	}))
);

const reactLogoIcon = getSvgIcon(ReactLogo);
const viteLogoIcon = getSvgIcon(ViteLogo);

function App(): JSX.Element {
	const [count, setCount] = useState(0);

	return (
		<>
			<GlobalStyles />
			<div className="logo-container">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<IconHolder icon={viteLogoIcon} className="logo" title="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<IconHolder icon={reactLogoIcon} className="logo react" title="React Logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<Suspense fallback="Loading footer…">
				<SubmoduleApp />
			</Suspense>
		</>
	);
}

export { App };
