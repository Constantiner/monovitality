import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Monovitality Site`,
		siteUrl: `https://constantiner.github.io/monovitality/`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				useResolveUrlLoader: true
			}
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "readme",
				path: "../../README.md"
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1280
						}
					},
					"gatsby-remark-autolink-headers",
					"gatsby-remark-prismjs",
					"gatsby-remark-smartypants"
				]
			}
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/
				}
			}
		}
	],
	jsxRuntime: "automatic"
};

export default config;
