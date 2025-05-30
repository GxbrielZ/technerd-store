import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import { newProducts } from "../data/newProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsSection headerTitle="Nowe Produkty" products={newProducts} />
    </div>
  );
};

export default Home;
