import { FC } from "react";

interface MenuItemProps {
  imagePath: string;
  weight?: number;
  title: string;
  ingredients?: string | null;
  price: number;
}

const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
  return (
    <div className="w-72 lg:w-96 shadow-xl rounded-2xl bg-white flex flex-col">
      <div className="relative">
        <img className="object-cover w-full h-[15rem]" src={imagePath} alt={title} />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">{weight} g</span>
      </div>
      <div className="p-4 sm:p-8 flex flex-col justify-between h-[calc(100%_-_15rem)] flex-1">
        <div>
          <h2>{title}</h2>

          <p className="mb-4 sm:mb-8 text-sm sm:text-base">{ingredients}</p>
        </div>
        <div className="flex justify-between items-center flex-col gap-3 sm:flex-row">
          <span className="text-xl font-semibold">{price} грн.</span>
          <button>Додати до корзини</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
