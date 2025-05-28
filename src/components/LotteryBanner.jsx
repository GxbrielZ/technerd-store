import lotteryImg from "../assets/hero/lottery-image.jpg";

const LotteryBanner = () => {
  return (
    <div className="w-full h-full rounded-b-xl bg-darkwhite shadow text-lightgrey p-2">
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Wielkie losowanie rabatów</h2>
            <p className="text-lg mb-6">
              Codziennie masz szansę wylosować wyjątkowy rabat i zaoszczędzić na zakupach!
            </p>
          </div>

          <div>
            <button className="bg-primary text-darkwhite hover:bg-[#169168] cursor-pointer font-bold py-3 px-8 rounded-md text-lg duration-300">
              Sprawdź swój rabat
            </button>
            <p className="mt-4">
              Promocja trwa tylko do końca miesiąca!
            </p>
          </div>
        </div>

        <div className="hidden md:block w-1/3 relative">
          <img 
            src={lotteryImg} 
            alt="Kupon rabatowy"
            className="absolute h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LotteryBanner;
