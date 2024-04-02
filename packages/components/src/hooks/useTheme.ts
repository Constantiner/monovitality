import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const useTheme = (): [isDarkMode: boolean] => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);

	useHotkeys("alt+t", () => setIsDarkTheme(previousIsDarkTheme => !previousIsDarkTheme));

	return [isDarkTheme];
};
