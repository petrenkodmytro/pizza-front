import { useGetMenuQuery } from "@app/core/types";
import MenuList from "@app/modules/menu/components/menu-list";
import MenuListLoading from "@app/modules/menu/components/menu-list-loading";
import ShowInfo from "@app/common/components/show-info/show-info";

const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Упс, сталася помилка!</p>
        <p>Спробуйте трохи пізніше</p>
      </ShowInfo>
    );
  }

  if (loading) {
    return <MenuListLoading items={9} />;
  }

  if (!data) {
    return (
      <ShowInfo type="info">
        <p>Нажаль, меню пусте ☹️</p>
      </ShowInfo>
    );
  }

  return <MenuList items={data.menu} />;
};

export default MenuPage;
