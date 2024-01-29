const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 p-12 mt-auto">
        <div>
          <div className="mb-4">
            <span className="uppercase font-bold text-sm text-zinc-500">Контакти</span>
          </div>
          <div className="mb-8">
            <ul>
              <li>
                <a className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline" href="tel:+380441234567">
                  057 123 45 67
                </a>
              </li>
              <li>
                <a className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline" href="mailto:info@pizzastack.app">
                  info@pizzastack.app
                </a>
              </li>
            </ul>
          </div>
          <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
          <div>
            <span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
          </div>
        </div>
      </footer>
      <a href="https://github.com/petrenkodmytro" className=" hover:text-blue-900 hover:underline text-center italic">Developed by Dmytro Petrenko</a>
    </>
  );
};

export default Footer;
