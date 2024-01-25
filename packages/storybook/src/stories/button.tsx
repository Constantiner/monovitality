import type { ButtonHTMLAttributes, CSSProperties, FunctionComponent } from "react";
import "./button.css";

type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> & {
	primary?: boolean;
	backgroundColor?: CSSProperties;
	size?: "small" | "medium" | "large";
	label: string;
};

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProperties> = ({
	primary = false,
	backgroundColor,
	size = "medium",
	label,
	...properties
}) => {
	const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
	return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
			style={typeof backgroundColor === "string" ? { backgroundColor } : backgroundColor}
			{...properties}
		>
			{label}
		</button>
	);
};
