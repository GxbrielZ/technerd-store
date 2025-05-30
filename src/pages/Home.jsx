import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import { newProducts } from "../data/newProducts";
import DealsSection from "../components/DealsSection";
import { deals } from "../data/deals";
import ArticlesSection from "../components/ArticlesSection";
import { recommendedArticles } from "../data/recommendedArticles";
import { smartphones } from "../data/smartphones";
import HobbiesSection from "../components/HobbiesSection";
import { hobbies } from "../data/hobbies";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsSection headerTitle="Nowe produkty" products={newProducts} />
      <DealsSection headerTitle="Oferty i okazje na czasie" deals={deals} />
      <ArticlesSection articles={recommendedArticles} />
      <ProductsSection headerTitle="Rekomendowane smartfony" products={smartphones} />
      <HobbiesSection headerTitle="Rozwijaj swoje pasje" hobbies={hobbies} />
    </div>
  );
};

export default Home;
