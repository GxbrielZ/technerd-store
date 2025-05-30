import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import { newProducts } from "../data/newProducts";
import DealsSection from "../components/DealsSection";
import { deals } from "../data/deals";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsSection headerTitle="Nowe Produkty" products={newProducts} />
      <DealsSection headerTitle="Oferty i okazje na czasie" deals={deals} />
    </div>
  );
};

export default Home;
