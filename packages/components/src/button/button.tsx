import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
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
			lg: "monovitality-button--lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
	const { variant, size, className, asChild, ...rest } = properties;
	const Comp = asChild ? Slot : "button";
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={reference} {...rest} />;
});
Button.displayName = "Button";
