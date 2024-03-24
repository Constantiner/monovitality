# `@monovitality/storybook`

`@monovitality/storybook` is a package within the Monovitality monorepo. It provides a Storybook setup for React components developed within the Monovitality project.

## Usage

You can use it to create stories for your React components.

## Creating Stories

A story represents a single state of one or more UI components. You can think of a story as a visual test case.

To create a story for a component, you need to create a new file with the `.stories.tsx` extension. In this file, you can define your stories.

Here is an example of a story for a Button component:

```typescript
import { Button } from '@monovitality/components';
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
 title: "Example/Button",
 component: Button
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
 args: {
  primary: true,
  label: "Button"
 }
};
```

In this example, we define a default export that contains the metadata for the stories, and named exports that represent the different states of the Button component.

## Viewing Stories

To view your stories, you can start the Storybook server by running the following command in your project's root directory:

```bash
npm run storybook
```

This will start the Storybook server and open a new browser window where you can view and interact with your stories.
