import Header from "./common/components/Header/Header";
import MenuList from "./modules/menu/components/menu-list";
import pizzaMenu from "./mocks/pizza.json";
import Footer from "./common/components/Footer/Footer";
import MenuPage from "./modules/menu/pages/MenuPage";

function App() {
  return (
    <>
      <Header/>
      <MenuPage/>
      <Footer/>
    </>
  );
}

export default App;
