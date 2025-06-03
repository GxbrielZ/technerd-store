import { useState, useEffect } from 'react';
import lotteryImg from "../assets/hero/lottery-image.jpg";
import { getRandomDiscountCode } from '../utils/discountCodes';

const DAILY_LOTTERY_KEY = 'lastLotteryDate';
const WON_DISCOUNT_KEY = 'wonDiscountCode';

const LotteryBanner = () => {
  const [canDraw, setCanDraw] = useState(true);
  const [message, setMessage] = useState('');
  const [wonCode, setWonCode] = useState(null);

  useEffect(() => {
    const lastDrawDate = localStorage.getItem(DAILY_LOTTERY_KEY);
    const wonCodeFromStorage = localStorage.getItem(WON_DISCOUNT_KEY);

    if (wonCodeFromStorage) {
      setWonCode(JSON.parse(wonCodeFromStorage));
      setCanDraw(false);
      setMessage(`Twój wylosowany rabat: ${JSON.parse(wonCodeFromStorage).display}!`);
    } else if (lastDrawDate) {
      const lastDrawDay = new Date(lastDrawDate).toDateString();
      const today = new Date().toDateString();

      if (lastDrawDay === today) {
        setCanDraw(false);
        setMessage('Już dziś wylosowałeś rabat. Spróbuj ponownie jutro!');
      } else {
        setCanDraw(true);
        setMessage('');
      }
    } else {
      setCanDraw(true);
      setMessage('');
    }
  }, []);

  const handleDrawDiscount = () => {
    if (!canDraw) {
      return;
    }

    const newCode = getRandomDiscountCode();
    setWonCode(newCode);
    localStorage.setItem(WON_DISCOUNT_KEY, JSON.stringify(newCode));
    localStorage.setItem(DAILY_LOTTERY_KEY, new Date().toISOString());
    setCanDraw(false);

    setMessage(`Gratulacje! Wylosowałeś: ${newCode.display}. Kod to "${newCode.code}".`);
  };

  return (
    <div className="w-full h-full md:rounded-b-xl bg-darkwhite shadow text-lightgrey p-2">
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Wielkie losowanie rabatów</h2>
            <p className="text-lg mb-6">
              Codziennie masz szansę wylosować wyjątkowy rabat i zaoszczędzić na zakupach!
            </p>
          </div>

          <div>
            <button
              className={`bg-primary text-darkwhite hover:bg-[#169168] cursor-pointer font-bold py-3 px-8 rounded-md text-lg duration-300
                ${!canDraw && !wonCode ? 'opacity-50 cursor-not-allowed' : ''}`} // Styl dla nieaktywnego przycisku
              onClick={handleDrawDiscount}
              disabled={!canDraw && !wonCode}
            >
              {wonCode ? `Użyj kodu: ${wonCode.code}` : 'Sprawdź swój rabat'}
            </button>
            {message && (
              <p className={`mt-4 text-md ${wonCode ? 'text-green-600' : 'text-orange-500'}`}>
                {message}
              </p>
            )}
            {!canDraw && !wonCode && (
                <p className="mt-4 text-sm text-gray-500">
                    Spróbuj ponownie jutro, aby wylosować nowy rabat!
                </p>
            )}
             {canDraw && !wonCode && ( // Tylko jeśli można losować i nic nie wylosowano
                <p className="mt-4 text-sm text-gray-500">
                    Promocja trwa tylko do końca miesiąca!
                </p>
            )}
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
