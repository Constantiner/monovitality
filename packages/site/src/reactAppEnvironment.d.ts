// fix: gatsby typescript error cannot find module img.jpg or its corresponding type declarations
declare module "*.jpg" {
	export default "" as string;
}
declare module "*.png" {
	export default "" as string;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
	const content: any;
	export default content;
}
