/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_TEST_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	const src: string;
	export default src;
}
