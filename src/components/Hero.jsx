import Categories from "./Categories";
import Banner from "./Banner";
import LotteryBanner from "./LotteryBanner";

const Hero = () => {
  return (
    <section className="pt-4 px-8">
      <div className="grid grid-cols-4 auto-rows-auto gap-4">
        <aside className="row-span-4">
          <Categories />
        </aside>
        <div className="col-span-3 row-span-3">
          <Banner />
        </div>
        <div className="col-span-3 col-start-2 row-start-4">
          <LotteryBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
