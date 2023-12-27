import MenuItem from "./menu-item";
import { FC } from "react";
import { Menu } from "@app/core/types";

interface MenuListProps {
  items: Menu[];
}

const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-20 pb-16">
      {items.map(({ image, ...pizza }) => (
        <MenuItem {...pizza} image={image} key={`pizza-${pizza.id}`} />
      ))}
    </div>
  );
};

export default MenuList;
