import { IconButton, getFaSvgIcon } from "@monovitality/components";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactComponent as faButtonIcon } from "./face-smile-regular.svg";

const buttonIcon = getFaSvgIcon(faButtonIcon);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IconButton> = {
	title: "Monovitality/IconButton",
	component: IconButton,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
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
		icon: {
			control: false,
			description: "The icon of the button"
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

type Story = StoryObj<typeof IconButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		label: "Default IconButton",
		icon: buttonIcon
	}
};

export const DefaultSmall: Story = {
	args: {
		label: "Default IconButton",
		size: "sm",
		icon: buttonIcon
	}
};

export const DefaultLarge: Story = {
	args: {
		label: "Default IconButton",
		size: "lg",
		icon: buttonIcon
	}
};

export const Secondary: Story = {
	args: {
		label: "Secondary IconButton",
		variant: "secondary",
		icon: buttonIcon
	}
};

export const SecondarySmall: Story = {
	args: {
		label: "Secondary IconButton",
		variant: "secondary",
		size: "sm",
		icon: buttonIcon
	}
};

export const SecondaryLarge: Story = {
	args: {
		label: "Secondary IconButton",
		variant: "secondary",
		size: "lg",
		icon: buttonIcon
	}
};

export const Outline: Story = {
	args: {
		label: "Outline IconButton",
		variant: "outline",
		icon: buttonIcon
	}
};

export const OutlineSmall: Story = {
	args: {
		label: "Outline IconButton",
		variant: "outline",
		size: "sm",
		icon: buttonIcon
	}
};

export const OutlineLarge: Story = {
	args: {
		label: "Outline IconButton",
		variant: "outline",
		size: "lg",
		icon: buttonIcon
	}
};
