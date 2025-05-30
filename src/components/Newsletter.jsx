import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className="bg-primary py-8 px-4 md:py-12 lg:py-16 my-18 shadow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8 flex-1">
          <div className="flex-shrink-0">
            <CiMail className="w-24 h-24 md:w-32 md:h-32 text-darkwhite" />
          </div>
          <div className="text-darkwhite">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Specjalne rabaty dla subskrybentów
            </h2>
            <p className="text-base md:text-lg">
              Zapisz się do naszego newslettera i otrzymuj od nas specjalne kody rabatowe.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 max-w-sm">
          <input
            type="email"
            placeholder="Twój adres e-mail..."
            className="w-full p-3 rounded-md bg-transparent border-2 border-darkwhite placeholder-darkwhite text-darkwhite focus:outline-none focus:ring-2 focus:ring-darkwhite"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-darkwhite text-primary font-bold hover:bg-[#ededed] duration-300 cursor-pointer"
          >
            ZAPISZ SIĘ DO NEWSLETTERA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
