import MenuItem from "./menu-item";
import { Pizza } from "../types/pizza";
import { FC } from "react";

interface MenuListProps {
  items: Pizza[];
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
