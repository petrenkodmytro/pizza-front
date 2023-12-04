import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./menu-item";

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const FirstStory: Story = {
  args: {},
};
