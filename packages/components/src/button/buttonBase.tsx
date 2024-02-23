import { cva, type VariantProps } from "class-variance-authority";
import cn from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { match, P } from "ts-pattern";
import { IconHolder } from "../iconHolder/iconHolder";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import "./button.scss";

const buttonBaseVariants = cva("monovitality-button", {
	variants: {
		variant: {
			default: "monovitality-button--default",
			secondary: "monovitality-button--secondary",
			outline: "monovitality-button--outline"
		},
		size: {
			default: "monovitality-button--default-size",
			sm: "monovitality-button--sm",
			lg: "monovitality-button--lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

export type ButtonBaseVariants = VariantProps<typeof buttonBaseVariants>;

export type ButtonBaseProperties = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonBaseVariants & { label?: string; icon?: IconProperties };

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProperties>((properties, reference) => {
	const { label, icon, variant, size, className, ...rest } = properties;
	return match(label)
		.with(P.nullish, () =>
			match(icon)
				.with(P.nullish, () => (
					<button
						className={cn(buttonBaseVariants({ variant, size, className }))}
						ref={reference}
						{...rest}
					/>
				))
				.otherwise(icon => (
					<button className={cn(buttonBaseVariants({ variant, size, className }))} ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
					</button>
				))
		)
		.otherwise(label =>
			match(icon)
				.with(P.nullish, () => (
					<button className={cn(buttonBaseVariants({ variant, size, className }))} ref={reference} {...rest}>
						{label}
					</button>
				))
				.otherwise(icon => (
					<button className={cn(buttonBaseVariants({ variant, size, className }))} ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
						{label}
					</button>
				))
		);
});
ButtonBase.displayName = "ButtonBase";
