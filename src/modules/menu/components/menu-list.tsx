import pizzaMenu from "../../../mocks/pizza.json";
import MenuItem from "./menu-item";

const MenuList = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {pizzaMenu.map(({ image, ...pizza }) => (
        <MenuItem {...pizza} imagePath={"/assets/pizza/" + image} />
      ))}
    </div>
  );
};

export default MenuList;
