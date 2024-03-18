import { faFaceSmile as faButtonIcon } from "@fortawesome/free-solid-svg-icons";
import { LabelButton, getFontAwesomeIcon } from "@monovitality/components";
import type { Meta, StoryObj } from "@storybook/react";

const buttonIcon = getFontAwesomeIcon(faButtonIcon);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LabelButton> = {
	title: "Monovitality/LabelButton",
	component: LabelButton,
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

type Story = StoryObj<typeof LabelButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		label: "Default LabelButton"
	}
};

export const DefaultWithIcon: Story = {
	args: {
		label: "Default LabelButton",
		icon: buttonIcon
	}
};

export const DefaultSmall: Story = {
	args: {
		label: "Default LabelButton",
		size: "sm"
	}
};

export const DefaultSmallWithIcon: Story = {
	args: {
		label: "Default LabelButton",
		size: "sm",
		icon: buttonIcon
	}
};

export const DefaultLarge: Story = {
	args: {
		label: "Default LabelButton",
		size: "lg"
	}
};

export const DefaultLargeWithIcon: Story = {
	args: {
		label: "Default LabelButton",
		size: "lg",
		icon: buttonIcon
	}
};

export const Secondary: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary"
	}
};

export const SecondaryWithIcon: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary",
		icon: buttonIcon
	}
};

export const SecondarySmall: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary",
		size: "sm"
	}
};

export const SecondarySmallWithIcon: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary",
		size: "sm",
		icon: buttonIcon
	}
};

export const SecondaryLarge: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary",
		size: "lg"
	}
};

export const SecondaryLargeWithIcon: Story = {
	args: {
		label: "Secondary LabelButton",
		variant: "secondary",
		size: "lg",
		icon: buttonIcon
	}
};

export const Outline: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline"
	}
};

export const OutlineWithIcon: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline",
		icon: buttonIcon
	}
};

export const OutlineSmall: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline",
		size: "sm"
	}
};

export const OutlineSmallWithIcon: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline",
		size: "sm",
		icon: buttonIcon
	}
};

export const OutlineLarge: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline",
		size: "lg"
	}
};

export const OutlineLargeWithIcon: Story = {
	args: {
		label: "Outline LabelButton",
		variant: "outline",
		size: "lg",
		icon: buttonIcon
	}
};
