import { forwardRef, type ButtonHTMLAttributes } from "react";
import { match, P } from "ts-pattern";
import { IconHolder } from "../iconHolder/iconHolder";
import type { IconProperties } from "../iconHolder/iconHolderUtil";
import { Button, type ButtonVariants } from "./button";
import "./button.scss";

export type ButtonBaseProperties = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariants & { label?: string; icon?: IconProperties };

export const LabelButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProperties>((properties, reference) => {
	const { label, icon, ...rest } = properties;
	return match(label)
		.with(P.nullish, () =>
			match(icon)
				.with(P.nullish, () => <Button ref={reference} {...rest} />)
				.otherwise(icon => (
					<Button ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
					</Button>
				))
		)
		.otherwise(label =>
			match(icon)
				.with(P.nullish, () => (
					<Button ref={reference} {...rest}>
						{label}
					</Button>
				))
				.otherwise(icon => (
					<Button ref={reference} {...rest}>
						<IconHolder icon={icon}></IconHolder>
						{label}
					</Button>
				))
		);
});
LabelButtonBase.displayName = "LabelButtonBase";
