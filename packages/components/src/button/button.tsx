import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import { ButtonBase, type ButtonBaseVariants } from "./buttonBase";

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonBaseVariants & { label: string; icon?: IconProperties; asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
	const { label, icon, variant, size, className, asChild, ...rest } = properties;
	return (
		<ButtonBase
			ref={reference}
			label={label}
			icon={icon}
			variant={variant}
			size={size}
			className={className}
			asChild={asChild}
			{...rest}
		/>
	);
});
Button.displayName = "Button";
