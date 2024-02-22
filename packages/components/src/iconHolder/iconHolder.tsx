import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "clsx";
import type { FunctionComponent } from "react";
import { P, match } from "ts-pattern";
import "./iconHolder.scss";
import type { HasTitle, IconProperties } from "./iconHolderUtil";

type IconHolderProperties = HasTitle & { icon?: IconProperties; className?: string };

export const IconHolder: FunctionComponent<IconHolderProperties> = ({ icon, title, className }): JSX.Element | null =>
	match(icon)
		.with(P.nullish, () => null)
		.otherwise(icon => {
			const iconHolderClasses = classNames("monovitality-icon-holder", className ?? {});
			return match(icon)
				.with({ type: "fa" }, icon => (
					<div className={iconHolderClasses}>
						<FontAwesomeIcon
							icon={icon.icon}
							width="100%"
							height="100%"
							title={title}
							focusable={false}
							aria-hidden={true}
						></FontAwesomeIcon>
					</div>
				))
				.with({ type: "faSvg" }, ({ icon: SVGIcon }) =>
					match(SVGIcon)
						.with(P.nullish, () => null)
						.otherwise(SVGIcon => (
							<div className={iconHolderClasses}>
								<SVGIcon
									width="100%"
									height="100%"
									title={title}
									focusable={false}
									aria-hidden={true}
									fill="currentColor"
								></SVGIcon>
							</div>
						))
				)
				.with({ type: "svg" }, ({ icon: SVGIcon }) =>
					match(SVGIcon)
						.with(P.nullish, () => null)
						.otherwise(SVGIcon => (
							<div className={iconHolderClasses}>
								<SVGIcon
									width="100%"
									height="100%"
									title={title}
									focusable={false}
									aria-hidden={true}
								></SVGIcon>
							</div>
						))
				)
				.exhaustive();
		});
