import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FunctionComponent, SVGProps } from "react";

export type HasTitle = { title?: string };

export type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & HasTitle>;

interface SVGIconProperties {
	icon: SVGIcon;
	type: "svg";
}
interface FontAwesomeIconProperties {
	icon: IconProp;
	type: "fa";
}

interface FASvgIconProperties {
	icon: SVGIcon;
	type: "faSvg";
}

export type IconProperties = SVGIconProperties | FontAwesomeIconProperties | FASvgIconProperties;

export const getFontAwesomeIcon = (fontAwesomeIcon: IconProp): IconProperties => ({
	type: "fa",
	icon: fontAwesomeIcon
});

export const getSvgIcon = (svgIcon: SVGIcon): IconProperties => ({
	type: "svg",
	icon: svgIcon
});

export const getFaSvgIcon = (svgIcon: SVGIcon): IconProperties => ({
	type: "faSvg",
	icon: svgIcon
});

export type { IconProp as FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
