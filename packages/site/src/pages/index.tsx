import { Button, GlobalStyles } from "@monovitality/components";
import { useMediaQuery } from "@react-hook/media-query";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { useEffect, useState, type FunctionComponent } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { GithubLink } from "../components/githubLink";
import "./index.scss";

const hasClass = (element: Element, className: string): boolean => {
	if (element.classList) {
		return element.classList.contains(className);
	}
	return new RegExp("(\\s|^)" + className + "(\\s|$)").test(element.className);
};

const addClass = (element: Element | null, className: string): void => {
	if (!element) {
		return;
	}
	if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) {
		element.className += " " + className;
	}
};

const removeClass = (element: Element | null, className: string): void => {
	if (!element) {
		return;
	}
	if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		const reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
		element.className = element.className.replace(reg, " ");
	}
};

type IndexPageProperties = PageProps<Queries.IndexPageQuery>;

const IndexPage: FunctionComponent<IndexPageProperties> = ({ data }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(useMediaQuery("(prefers-color-scheme: dark)"));
	useHotkeys("alt+t", () => setIsDarkTheme(previousIsDarkTheme => !previousIsDarkTheme));
	const { allMarkdownRemark } = data;
	const { edges } = allMarkdownRemark;

	useEffect(() => {
		const mainElement = document.querySelector("body");
		if (mainElement) {
			if (isDarkTheme) {
				addClass(mainElement, "theme-dark");
			} else {
				removeClass(mainElement, "theme-dark");
			}
		}
	}, [isDarkTheme]);

	if (edges.length === 0 || !edges[0].node.html) {
		return (
			<GlobalStyles>
				<main>No markdown content found</main>
			</GlobalStyles>
		);
	}

	const { html } = edges[0].node;

	return (
		<GlobalStyles>
			<main>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<footer>
					<Button asChild={true} className="site-button" size="lg">
						<a href="/web">Go to the Web App</a>
					</Button>
					<Button asChild={true} className="site-button" size="lg">
						<a href="/storybook">Go to Storybook</a>
					</Button>
				</footer>
			</main>
			<GithubLink />
		</GlobalStyles>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Monovitality</title>;

export const pageQuery = graphql`
	query IndexPage {
		allMarkdownRemark {
			edges {
				node {
					html
				}
			}
		}
	}
`;
