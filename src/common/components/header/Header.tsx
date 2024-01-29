import { Categories } from "@app/core/types";
import HeaderCategoryLink from "@app/modules/menu/components/link";
import Skeleton from "@app/modules/menu/components/skeleton";
import { FC } from "react";

interface HeaderProps {
  isLoading: boolean;
  categories?: Omit<Categories, "menu_items" | "menu_items_aggregate">[];
}
const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  return (
    <header className="h-12 shadow px-6  fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3 flex-1">
        <a href="/">🍕 PizzaStack</a>
        {isLoading ? (
          <>
            <div className="w-px bg-gray-200 h-6" />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <div className="flex gap-3 items-center flex-1">
            <div className="w-px bg-gray-200 h-6" />
            {categories?.map((category) => (
              <HeaderCategoryLink url={`#${category.slug}`} key={`header-category-${category.id}`}>
                {category.title}
              </HeaderCategoryLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
