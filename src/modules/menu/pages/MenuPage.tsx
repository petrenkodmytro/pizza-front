import { useGetMenuQuery } from "@app/core/types";
import MenuList from "@app/modules/menu/components/menu-list";

const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (!data && loading) {
    return <h1>Loading</h1>;
  }

  return <MenuList items={data!.menu} />;
};

export default MenuPage;
