import type { GatsbyConfig } from "gatsby";

const siteUrl = process.env.MONOVITALITY_SITE_URL ?? "https://constantiner.github.io/monovitality/";
// eslint-disable-next-line no-console
console.log("siteUrl", siteUrl);

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Monovitality Site",
		siteUrl: siteUrl,
		description: "React + TypeScript + Vite + Gatsby + Monorepo starter",
		author: "Konstantin Kovalev",
		authorTwitter: "Constantiner",
		authorLinkedIn: "constantiner",
		email: "constantiner@gmail.com",
		siteRepository: "https://github.com/Constantiner/monovitality"
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: {
		generateOnBuild: true
	},
	pathPrefix: "/monovitality",
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-sass",
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
				name: "images",
				path: "./src/assets/"
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
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Monovitality Site",
				short_name: "Monovitality",
				start_url: "/",
				background_color: "#263238",
				theme_color: "#263238",
				display: "minimal-ui",
				icon: "./src/assets/favicon.svg",
				icon_options: {
					purpose: "maskable"
				}
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
					{
						resolve: "gatsby-remark-autolink-headers",
						options: {
							className: "monovitality-anchor-link"
						}
					},
					"gatsby-remark-prismjs",
					"gatsby-remark-smartypants"
				]
			}
		},
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
