import MenuListLoading from "@app/modules/menu/components/menu-list-loading";
import Skeleton from "@app/modules/menu/components/skeleton";

const MenuCategoryLoading = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="flex flex-col gap-1 items-center">
        <Skeleton width={49} height={13} />
        <Skeleton width={49} height={4} />
      </div>
      <MenuListLoading items={6} />
    </div>
  );
};

export default MenuCategoryLoading;
