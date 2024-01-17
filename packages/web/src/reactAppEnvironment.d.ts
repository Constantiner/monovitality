/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "staging" | "test";
	}
}

declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	const src: string;
	export default src;
}
