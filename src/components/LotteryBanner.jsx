import { useState, useEffect } from 'react';
import lotteryImg from "../assets/hero/lottery-image.jpg";
import { getRandomDiscountCode } from '../utils/discountCodes';

const DAILY_LOTTERY_KEY = 'lastLotteryDate';
const WON_DISCOUNT_KEY = 'wonDiscountCode';

const LotteryBanner = () => {
    const [canDraw, setCanDraw] = useState(true);
    const [message, setMessage] = useState('');
    const [wonCode, setWonCode] = useState(null);
    const [timeToNextDraw, setTimeToNextDraw] = useState(null);

    useEffect(() => {
        const checkLotteryStatus = () => {
            const lastDrawDateStr = localStorage.getItem(DAILY_LOTTERY_KEY);
            const wonCodeFromStorage = localStorage.getItem(WON_DISCOUNT_KEY);

            const now = new Date();
            let lastDrawDate = null;

            if (lastDrawDateStr) {
                lastDrawDate = new Date(lastDrawDateStr);
                const twentyFourHoursAfterLastDraw = new Date(lastDrawDate.getTime() + (24 * 60 * 60 * 1000));

                if (now >= twentyFourHoursAfterLastDraw) {
                    // Minęły 24 godziny, resetujemy stan
                    localStorage.removeItem(WON_DISCOUNT_KEY);
                    localStorage.removeItem(DAILY_LOTTERY_KEY);
                    setCanDraw(true);
                    setWonCode(null);
                    setMessage('');
                    setTimeToNextDraw(null);
                    return true;
                } else {
                    // Nie minęły 24 godziny
                    const remainingTime = twentyFourHoursAfterLastDraw.getTime() - now.getTime();
                    setTimeToNextDraw(remainingTime);
                    setCanDraw(false);

                    // Jeśli kod jest wylosowany, aktualizujemy wiadomość o czasie
                    if (wonCodeFromStorage) {
                        const parsedWonCode = JSON.parse(wonCodeFromStorage);
                        setWonCode(parsedWonCode); // Ustawiamy wonCode tutaj, aby przycisk poprawnie się renderował
                        setMessage(`Twój wylosowany rabat: ${parsedWonCode.display}!`);
                    } else {
                        // Jeśli nie ma wonCodeFromStorage (np. po ręcznym usunięciu z localStorage lub innym scenariuszu),
                        // a losowanie było już dzisiaj
                        setMessage('Już dziś wylosowałeś rabat. Spróbuj ponownie jutro!');
                    }
                }
            } else {
                // Jeśli nie ma żadnych danych w localStorage
                setCanDraw(true);
                setWonCode(null); // Upewnij się, że wonCode jest null, jeśli nic nie wylosowano
                setMessage('');
                setTimeToNextDraw(null);
            }
            return false;
        };

        // Wywołaj funkcję sprawdzającą status natychmiast po załadowaniu
        const initialReset = checkLotteryStatus();

        // Ustaw interwał do aktualizacji czasu co sekundę, jeśli losowanie było zrobione i nie nastąpił reset
        let intervalId;
        if (!initialReset) { // Uruchom interwał tylko jeśli nie nastąpił natychmiastowy reset
            intervalId = setInterval(() => {
                if (checkLotteryStatus()) {
                    clearInterval(intervalId); // Zatrzymanie interwału po resecie
                }
            }, 1000);
        }

        // Funkcja czyszcząca interwał przy odmontowywaniu komponentu
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    const formatTime = (ms) => {
        if (ms <= 0) return "00:00:00";
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return [hours, minutes, seconds]
            .map(unit => String(unit).padStart(2, '0'))
            .join(':');
    };

    const handleDrawDiscount = () => {
        if (!canDraw) {
            return;
        }

        const newCode = getRandomDiscountCode();
        setWonCode(newCode);
        localStorage.setItem(WON_DISCOUNT_KEY, JSON.stringify(newCode));
        localStorage.setItem(DAILY_LOTTERY_KEY, new Date().toISOString());
        setCanDraw(false);

        const twentyFourHoursFromNow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
        setTimeToNextDraw(twentyFourHoursFromNow.getTime() - new Date().getTime());

        // Aktualizujemy wiadomość, włączając w nią kod rabatowy
        setMessage(`Gratulacje! Wylosowałeś: ${newCode.display}. Kod to "${newCode.code}".`);
    };

    // Obliczamy ostateczną wiadomość do wyświetlenia
    const displayMessage = () => {
        let finalMessage = message;
        if (!canDraw && timeToNextDraw !== null && timeToNextDraw > 0) {
            // Jeśli jest minutnik i nie można losować, dodajemy czas do wiadomości
            // Sprawdzamy czy wonCode istnieje, żeby wiedzieć, czy była to wygrana, czy tylko "spróbuj jutro"
            if (wonCode) {
                 finalMessage = `${message} (Kolejne losowanie za: ${formatTime(timeToNextDraw)})`;
            } else {
                 finalMessage = `Już dziś wylosowałeś rabat. Spróbuj ponownie jutro! (Kolejne losowanie za: ${formatTime(timeToNextDraw)})`;
            }
        } else if (!canDraw && !wonCode) {
            // Komunikat gdy losowanie było, ale nie ma wygranej i minutnik nie działa
            finalMessage = 'Już dziś wylosowałeś rabat. Spróbuj ponownie jutro!';
        } else if (canDraw && !wonCode) {
            // Komunikat gdy można losować i nic nie wylosowano
            finalMessage = 'Promocja trwa tylko do końca miesiąca!'; // Domyślny komunikat
        }
        return finalMessage;
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
                            ${!canDraw && !wonCode ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleDrawDiscount}
                            disabled={!canDraw && !wonCode}
                        >
                            {wonCode ? `Użyj kodu: ${wonCode.code}` : 'Sprawdź swój rabat'}
                        </button>
                        {/* Wyświetlamy tylko jedną, finalną wiadomość */}
                        {message && ( // Sprawdzamy, czy message w ogóle istnieje
                            <p className={`mt-4 text-md ${wonCode ? 'text-green-600' : 'text-orange-500'}`}>
                                {displayMessage()}
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