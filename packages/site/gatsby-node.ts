import type { CreateWebpackConfigArgs } from "gatsby";

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs): void => {
	actions.setWebpackConfig({
		module: {
			rules: [
				// custom loader added by me and installed using npm i file-loader
				{
					test: /\.(gif|jpg|png)$/, // add whatever files you wanna use within this regEx
					use: ["file-loader"]
				}
			]
		}
	});
};
