import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const useTheme = (): [isDarkMode: boolean] => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(useMediaQuery("(prefers-color-scheme: dark)"));

	useHotkeys("alt+t", () => setIsDarkTheme(previousIsDarkTheme => !previousIsDarkTheme));

	return [isDarkTheme];
};
