import { ButtonBase, ButtonBaseProperties } from "@monovitality/components";
import type { Meta, StoryObj } from "@storybook/react";
import "./buttonLink.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ButtonBase> = {
	title: "Monovitality/LinkButton",
	component: ButtonBase,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	render: (arguments_: ButtonBaseProperties) => {
		const { label, ...rest } = arguments_;
		return (
			<ButtonBase asChild={true} {...rest}>
				<a href="example.com" target="_blank">
					{label}
				</a>
			</ButtonBase>
		);
	},
	argTypes: {
		label: {
			control: "text",
			description: "The label of the button"
		},
		variant: {
			control: "select",
			options: ["default", "secondary", "outline", undefined],
			defaultValue: "default",
			description: "The variant of the button"
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", undefined],
			defaultValue: "default",
			description: "The size of the button"
		},
		disabled: {
			control: "boolean",
			defaultValue: false,
			description: "Whether the button is disabled"
		},
		onClick: {
			action: "clicked",
			description: "The action to be executed when the button is clicked"
		}
	}
};
export default meta;

type Story = StoryObj<typeof ButtonBase>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		label: "Default Button"
	}
};

export const DefaultSmall: Story = {
	args: {
		label: "Default Button",
		size: "sm"
	}
};

export const DefaultLarge: Story = {
	args: {
		label: "Default Button",
		size: "lg"
	}
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary"
	}
};

export const SecondarySmall: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary",
		size: "sm"
	}
};

export const SecondaryLarge: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary",
		size: "lg"
	}
};

export const Outline: Story = {
	args: {
		label: "Outline Button",
		variant: "outline"
	}
};

export const OutlineSmall: Story = {
	args: {
		label: "Outline Button",
		variant: "outline",
		size: "sm"
	}
};

export const OutlineLarge: Story = {
	args: {
		label: "Outline Button",
		variant: "outline",
		size: "lg"
	}
};
