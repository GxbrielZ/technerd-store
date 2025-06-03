import Categories from "./Categories";
import Banner from "./Banner";
import LotteryBanner from "./LotteryBanner";

const Hero = () => {
  return (
    <section className="md:pt-4 md:px-8">
      <div className="grid md:grid-cols-4 auto-rows-auto gap-4">
        <aside className="hidden md:block md:row-span-4">
          <Categories />
        </aside>
        <div className="md:col-span-3 row-span-3">
          <Banner />
        </div>
        <div className="md:col-span-3 md:col-start-2 row-start-4">
          <LotteryBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
