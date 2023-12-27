import { useGetMenuQuery } from "@app/core/types";
import MenuList from "@app/modules/menu/components/menu-list";
import MenuListLoading from "@app/modules/menu/components/menu-list-loading";

const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (loading) {
    return <MenuListLoading items={9} />;
  }

  if (!data) {
    return <h1>Sory! Menu empty</h1>;
  }

  return <MenuList items={data!.menu} />;
};

export default MenuPage;
