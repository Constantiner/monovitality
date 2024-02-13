import { cva, type VariantProps } from "class-variance-authority";
import cn from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { match, P } from "ts-pattern";
import { IconHolder } from "../iconHolder/iconHolder";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import "./button.scss";

const buttonVariants = cva("monovitality-button", {
	variants: {
		variant: {
			default: "monovitality-button--default",
			secondary: "monovitality-button--secondary",
			outline: "monovitality-button--outline"
		},
		size: {
			default: "monovitality-button--default-size",
			sm: "monovitality-button--sm",
			lg: "monovitality-button--lg",
			icon: "monovitality-button--icon"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & { label?: string; icon?: IconProperties };

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
	const { label, icon, variant, size, className, ...rest } = properties;
	return match(label)
		.with(P.nullish, () =>
			match(icon)
				.with(P.nullish, () => (
					<button className={cn(buttonVariants({ variant, size, className }))} ref={reference} {...rest} />
				))
				.otherwise(icon => (
					<button className={cn(buttonVariants({ variant, size, className }))} ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
					</button>
				))
		)
		.otherwise(label =>
			match(icon)
				.with(P.nullish, () => (
					<button className={cn(buttonVariants({ variant, size, className }))} ref={reference} {...rest}>
						{label}
					</button>
				))
				.otherwise(icon => (
					<button className={cn(buttonVariants({ variant, size, className }))} ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
						{label}
					</button>
				))
		);
});
Button.displayName = "Button";
