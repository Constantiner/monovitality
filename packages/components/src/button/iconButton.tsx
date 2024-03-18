import cn from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import { ButtonVariants } from "./button";
import { LabelButtonBase } from "./labelButtonBase";

export type IconButtonProperties = Omit<
	ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & { label?: string; icon: IconProperties },
	"children"
>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProperties>((properties, reference) => {
	const { label, icon, variant, size, className, ...rest } = properties;
	return (
		<LabelButtonBase
			ref={reference}
			aria-label={label || undefined}
			title={label || undefined}
			icon={icon}
			variant={variant}
			size={size}
			className={cn("monovitality-button--icon-only", className)}
			{...rest}
		/>
	);
});
IconButton.displayName = "IconButton";
