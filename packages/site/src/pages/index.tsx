import { Button, GlobalStyles, addClass, removeClass, useTheme } from "@monovitality/components";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { useLayoutEffect, type FunctionComponent } from "react";
import { GithubLink } from "../components/githubLink";
import Metadata from "../layout/metadata";
import "./index.scss";

type IndexPageProperties = PageProps<Queries.IndexPageQuery>;

const IndexPage: FunctionComponent<IndexPageProperties> = ({ data }) => {
	const [isDarkTheme] = useTheme();
	const { allMarkdownRemark } = data;
	const { edges } = allMarkdownRemark;

	useLayoutEffect(() => {
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
			<>
				<Metadata title="Monovitality" />
				<GlobalStyles>
					<main>No markdown content found</main>
				</GlobalStyles>
			</>
		);
	}

	const { html } = edges[0].node;

	return (
		<>
			<Metadata title="Monovitality" />
			<GlobalStyles>
				<main>
					<div dangerouslySetInnerHTML={{ __html: html }} />
					<footer>
						<Button asChild={true} className="site-button" size="lg">
							<a href="./web">Go to the Web App</a>
						</Button>
						<Button asChild={true} className="site-button" size="lg">
							<a href="./storybook">Go to Storybook</a>
						</Button>
					</footer>
				</main>
				<GithubLink />
			</GlobalStyles>
		</>
	);
};

export default IndexPage;

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
