import cn from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import { ButtonBase, type ButtonBaseVariants } from "./buttonBase";

export type IconButtonProperties = Omit<
	ButtonHTMLAttributes<HTMLButtonElement> &
		ButtonBaseVariants & { label?: string; icon: IconProperties; asChild?: boolean },
	"children"
>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProperties>((properties, reference) => {
	const { label, icon, variant, size, className, asChild, ...rest } = properties;
	return (
		<ButtonBase
			ref={reference}
			aria-label={label || undefined}
			title={label || undefined}
			icon={icon}
			variant={variant}
			size={size}
			asChild={asChild}
			className={cn("monovitality-button--icon-only", className)}
			{...rest}
		/>
	);
});
IconButton.displayName = "IconButton";
