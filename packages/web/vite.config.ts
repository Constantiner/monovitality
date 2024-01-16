import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
	plugins: [react()]
});
