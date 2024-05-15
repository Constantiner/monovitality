import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import type { ButtonVariants } from "./button";
import { LabelButtonBase } from "./labelButtonBase";

export type LabelButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariants & { label: string; icon?: IconProperties };

export const LabelButton = forwardRef<HTMLButtonElement, LabelButtonProperties>((properties, reference) => {
	const { label, icon, variant, size, className, ...rest } = properties;
	return (
		<LabelButtonBase
			ref={reference}
			label={label}
			icon={icon}
			variant={variant}
			size={size}
			className={className}
			{...rest}
		/>
	);
});
LabelButton.displayName = "LabelButton";
