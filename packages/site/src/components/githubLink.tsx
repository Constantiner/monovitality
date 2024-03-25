import type { FunctionComponent } from "react";
import GithubMark from "../assets/github-mark.svg";
import "./githubLink.scss";

export const GithubLink: FunctionComponent<Record<string, never>> = () => {
	return (
		<>
			<div className="github-link--triangle"></div>
			<a
				href="https://github.com/Constantiner/monovitality"
				target="_blank"
				rel="noopener noreferrer"
				className="github-link"
			>
				<div className="github-link--icon-container">
					<GithubMark className="github-link--icon" />
				</div>
			</a>
		</>
	);
};
