import { Button, GlobalStyles } from "@monovitality/components";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { type FunctionComponent } from "react";
import { GithubLink } from "../components/githubLink";
import "./index.scss";

type IndexPageQuery = {
	allMarkdownRemark: {
		edges: {
			node: {
				html: string;
			};
		}[];
	};
};

type IndexPageProperties = PageProps<IndexPageQuery>;

const IndexPage: FunctionComponent<IndexPageProperties> = ({ data }) => {
	const { allMarkdownRemark } = data;
	const { edges } = allMarkdownRemark;

	if (edges.length === 0) {
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
	query {
		allMarkdownRemark {
			edges {
				node {
					html
				}
			}
		}
	}
`;
