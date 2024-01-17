import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
	plugins: [react(), svgr()]
});
