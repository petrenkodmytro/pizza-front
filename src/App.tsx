import Header from "./common/components/Header/Header";
import MenuList from "./modules/menu/components/menu-list";
import pizzaMenu from "./mocks/pizza.json";
import Footer from "./common/components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <MenuList items={pizzaMenu}/>
      <Footer/>
    </>
  );
}

export default App;
