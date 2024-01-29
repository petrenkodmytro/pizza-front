import { Categories } from "@app/core/types";
import MenuList from "@app/modules/menu/components/menu-list";
import { FC } from "react";

interface MenuCategoryProps {
  data: Omit<Categories, "menu_items_aggregate">;
}

const MenuCategory: FC<MenuCategoryProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-12" id={data.slug}>
      <div className="flex flex-col gap-1 items-center">
        <h2 className="relative font-bold text-2xl after:content-[''] after:block after:absolute after:w-full after:h-1 after:bg-amber-400">
          {data.title}
        </h2>
      </div>
      <MenuList items={data.menu_items} />
    </div>
  );
};

export default MenuCategory;
