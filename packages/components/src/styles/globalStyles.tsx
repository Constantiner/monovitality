import type { EmptyType } from "@monovitality/types";
import type { FunctionComponent, PropsWithChildren } from "react";
import "./index.scss";

export const GlobalStyles: FunctionComponent<PropsWithChildren<EmptyType>> = ({
	children
}: PropsWithChildren<EmptyType>): JSX.Element => {
	return <>{children}</>;
};
