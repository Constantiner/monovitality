import { HTMLAttributes, HtmlHTMLAttributes, ReactElement } from "react";

type HTMLProperties = {
	htmlAttributes?: HtmlHTMLAttributes<HTMLHtmlElement>;
	headComponents?: ReactElement;
	bodyAttributes?: HTMLAttributes<HTMLBodyElement>;
	preBodyComponents?: ReactElement;
	body: string;
	postBodyComponents?: ReactElement;
};

export default function HTML(properties: HTMLProperties): JSX.Element {
	return (
		<html lang="en-US" {...properties.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				{properties.headComponents}
			</head>
			<body {...properties.bodyAttributes}>
				{properties.preBodyComponents}
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: properties.body }} />
				{properties.postBodyComponents}
			</body>
		</html>
	);
}
