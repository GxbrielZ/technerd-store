import heroImg1 from "../assets/hero/hero-image-1.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[370px] overflow-hidden rounded-t-xl shadow">
      <img
        src={heroImg1}
        alt="Sezon rowerowy"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply z-10"></div>

      <div className="relative z-20 text-darkwhite px-6 py-16 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">Sezon rowerowy rozpoczęty!</h2>
        <p className="text-lg md:text-xl">
          Przygotuj się na słoneczne dni i pełne przygód trasy z naszą szeroką ofertą rowerów, dopasowanych do każdego stylu jazdy. Znajdziesz u nas zarówno lekkie modele miejskie, jak i wytrzymałe rowery górskie.
        </p>
      </div>

      <div className="absolute bottom-0 w-full bg-darkwhite flex flex-col md:flex-row justify-around text-sm md:text-base text-lightgrey font-medium py-3 z-30 shadow-lg">
        <span className="px-4 py-2 cursor-pointer">Okazje na grilla</span>
        <span className="px-4 py-2 cursor-pointer">Wielkanocna wyprzedaż</span>
        <span className="px-4 py-2 cursor-pointer">W zestawie taniej</span>
        <span className="px-4 py-2 cursor-pointer">-5% dla użytkowników aplikacji</span>
        <span className="px-4 py-2 cursor-pointer">Raty 0% i do pół roku nie płacisz</span>
      </div>
    </div>
  );
};

export default Banner;
