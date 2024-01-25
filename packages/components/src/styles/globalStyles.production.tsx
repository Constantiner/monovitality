import type { FunctionComponent, PropsWithChildren } from "react";
import "./index.scss";
import "./wrapperStyles.scss";

type GlobalStylesProperties = { className?: string };

export const GlobalStyles: FunctionComponent<PropsWithChildren<GlobalStylesProperties>> = ({
	children,
	className
}): JSX.Element => {
	if (className) {
		return <div className={className}>{children}</div>;
	}
	return <>{children}</>;
};
