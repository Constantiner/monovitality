import { type ButtonHTMLAttributes, forwardRef } from "react";
import "./button.css";

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
	return <button className="monovitality-button" ref={reference} {...properties} />;
});
Button.displayName = "Button";
