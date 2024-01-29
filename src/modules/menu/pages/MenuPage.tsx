import { useGetMenuQuery } from "@app/core/types";
import MenuListLoading from "@app/modules/menu/components/menu-list-loading";
import ShowInfo from "@app/common/components/show-info/show-info";
import MenuCategory from "../components/menu-category";

const MenuPage = () => {
  // fetch data from bekend
  const { data, loading, error } = useGetMenuQuery();
  // console.log(error);
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

  return (
    <div className="flex flex-col gap-6 mt-20">
      {data.categories.map((category) => (
        <MenuCategory data={category} key={`menu-page-${category.id}`} />
      ))}
    </div>
  );
};

export default MenuPage;
