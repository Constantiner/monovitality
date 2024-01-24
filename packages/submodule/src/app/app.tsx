import { type FunctionComponent } from "react";
import "./app.scss";
import { FooterContent } from "../footer/footerContent";

export const SubmoduleApp: FunctionComponent = () => {
	return (
		<footer className="monovitality-footer">
			<FooterContent />
		</footer>
	);
};
