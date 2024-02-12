import { forwardRef, type ButtonHTMLAttributes } from "react";
import { P, match } from "ts-pattern";
import "./button.scss";

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> & { label?: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
	const { label, ...rest } = properties;
	return match(label)
		.with(P.nullish, () => <button className="monovitality-button" ref={reference} {...rest} />)
		.otherwise(label => (
			<button className="monovitality-button" ref={reference} {...rest}>
				{label}
			</button>
		));
});
Button.displayName = "Button";
