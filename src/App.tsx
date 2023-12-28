import Header from "./common/components/header/Header";
import Footer from "./common/components/footer/Footer";
import MenuPage from "./modules/menu/pages/MenuPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <MenuPage/>
      <Footer/>
    </div>
  );
}

export default App;
