import { FC } from "react";
import MenuItemLoading from "./menu-item-loading";

interface MenuListLoadingProps {
  items: number;
}

const MenuListLoading: FC<MenuListLoadingProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {new Array(items).fill(1).map((value, index) => {
        return <MenuItemLoading key={`menu-loading-${index}`} />;
      })}
    </div>
  );
};

export default MenuListLoading;
