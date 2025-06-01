import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router";

const ProductsSection = ({ products, headerTitle }) => {
    const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 6,
      spacing: 16,
    },
    breakpoints: {
    "(max-width: 768px)": {
      slides: {
        perView: "auto",
        spacing: 12,
      },
    },
  },
  });

  return (
    <div className="bg-darkwhite mt-4 py-6 px-4 relative shadow">
        <h1 className="text-lightgrey font-bold text-xl md:text-2xl mb-6">{headerTitle}</h1>

      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="keen-slider__slide !w-[220px] bg-white rounded-lg shadow p-3 flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-40 text-darkwhite flex items-center justify-center text-sm rounded mb-2">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-auto object-contain rounded"
                />
              ) : (
                "Brak zdjęcia"
              )}
            </div>
            <p className="text-sm text-lightgrey font-semibold line-clamp-2 mb-1">{product.name}</p>
            <p className="text-rose font-bold text-lg">{product.price.toFixed(2)} zł</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
