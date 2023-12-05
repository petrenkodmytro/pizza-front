import type { Meta, StoryObj } from "@storybook/react";
import pizzaMenu from "../../../mocks/pizza.json";
import MenuList from "./menu-list";

const meta: Meta<typeof MenuList> = {
  component: MenuList,
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const FirstStory: Story = {
  args: { items: pizzaMenu },
};
