import { FC } from "react";
import { AdvancedImage } from "@cloudinary/react";

import { cloudinary } from "@app/core/cloudinary";

interface MenuItemProps {
  image: string;
  weight?: number;
  title: string;
  ingredients?: string | null;
  price: number;
}

const MenuItem: FC<MenuItemProps> = ({ image, weight, title, ingredients, price }) => {
  const imageCld = cloudinary.image(image);
  // const transformations = ["w_384", "h_240", "dpr_2.0"];
  imageCld.addTransformation("w_384, h_240, dpr_2");

  return (
    <div className="w-72 lg:w-96 shadow-xl rounded-2xl bg-white flex flex-col">
      <div className="relative">
        <AdvancedImage cldImg={imageCld} width={384} height={240} />
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
