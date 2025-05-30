import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const DealsSection = ({ deals, headerTitle }) => {
    const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 8,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
    },
  });

  return (
    <div className="bg-darkwhite mt-4 py-6 px-4 relative shadow">
      <h1 className="text-lightgrey font-bold text-xl md:text-2xl mb-6">{headerTitle}</h1>

      <div ref={sliderRef} className="keen-slider">
        {deals.map((category) => (
          <div
            key={category.id}
            className="keen-slider__slide !w-[100px] sm:!w-[120px] md:!w-[150px] lg:!w-[180px] flex flex-col items-center justify-center p-2" 
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden">
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-darkwhite text-xs">Brak zdjęcia</span>
              )}
            </div>
            <p className="text-sm text-lightgrey font-semibold text-center leading-tight line-clamp-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
