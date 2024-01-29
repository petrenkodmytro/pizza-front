import Header from "./common/components/header/Header";
import Footer from "./common/components/footer/Footer";
import MenuPage from "./modules/menu/pages/MenuPage";
import { useGetCategoriesQuery } from "./core/types";

function App() {
  const { data, loading } = useGetCategoriesQuery();
// console.log(data);
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading = {loading} categories={data?.categories}/>
      <main>
        <MenuPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
