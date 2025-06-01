import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { allProducts } from '../data/allProducts';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-lightgrey text-xl">
        Ładowanie produktu... lub Produkt nie znaleziony.
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Dodano ${quantity}x ${product.name} do koszyka.`);
  };

  return (
    <div className="font-roboto bg-darkwhite text-lightgrey py-8 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Lewa kolumna: Obraz + Opis/Specyfikacja na większych ekranach */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 mb-8">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[400px] w-auto object-contain"
                />
              ) : (
                <div className="h-[400px] flex items-center justify-center text-gray-400">Brak zdjęcia</div>
              )}
            </div>

            {/* Opis/Specyfikacja - widoczny tylko na ekranach większych lub równych md */}
            <div className="hidden md:block bg-white p-4 rounded-lg shadow-md">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-4 py-2 text-lg font-semibold ${
                    activeTab === 'description' ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-primary'
                  } focus:outline-none transition-colors duration-300`}
                >
                  Opis
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`ml-4 px-4 py-2 text-lg font-semibold ${
                    activeTab === 'specs' ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-primary'
                  } focus:outline-none transition-colors duration-300`}
                >
                  Specyfikacja
                </button>
              </div>

              {activeTab === 'description' && (
                <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>{product.description || "Brak opisu dla tego produktu."}</p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="text-gray-700 text-sm sm:text-base">
                  <h5 className="font-bold mb-3">Szczegóły techniczne:</h5>
                  <ul className="list-disc list-inside">
                    {product.specs && product.specs.length > 0 ? (
                      product.specs.map((spec, index) => (
                        <li key={index} className="mb-1">
                          <span className="font-semibold">{spec.name}:</span> {spec.value}
                        </li>
                      ))
                    ) : (
                      <li>Brak szczegółowej specyfikacji dla tego produktu.</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Prawa kolumna: Nazwa, cena, ilość, przyciski */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-extrabold text-rose mb-6">{product.price.toFixed(2)} zł</p>

            <div className="flex items-center text-green-600 font-semibold mb-6">
              <BsCheckCircleFill className="mr-2" /> Dostępny
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xl font-bold text-lightgrey hover:bg-[#ededed] rounded-l-lg duration-200 cursor-pointer"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center py-2 border-x border-gray-300 outline-none text-lightgrey
                             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-4 py-2 text-xl font-bold text-lightgrey hover:bg-[#ededed] rounded-r-lg duration-200 cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-primary hover:bg-[#169168] text-darkwhite font-bold py-3 px-6 rounded-lg flex items-center justify-center duration-300 cursor-pointer"
              >
                <FiShoppingCart className="mr-3" size={20} /> Dodaj do koszyka
              </button>
              <button
                className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 text-lightgrey p-3 rounded-lg flex items-center justify-center duration-300 cursor-pointer"
                title="Dodaj do ulubionych"
              >
                <FiHeart size={20} />
              </button>
            </div>

            {/* Opis/Specyfikacja - widoczny tylko na ekranach mobilnych (poniżej md) */}
            <div className="md:hidden bg-white p-4 rounded-lg shadow-md mt-8">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-4 py-2 text-lg font-semibold ${
                    activeTab === 'description' ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-primary'
                  } focus:outline-none transition-colors duration-300`}
                >
                  Opis
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`ml-4 px-4 py-2 text-lg font-semibold ${
                    activeTab === 'specs' ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-primary'
                  } focus:outline-none transition-colors duration-300`}
                >
                  Specyfikacja
                </button>
              </div>

              {activeTab === 'description' && (
                <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>{product.description || "Brak opisu dla tego produktu."}</p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="text-gray-700 text-sm sm:text-base">
                  <h5 className="font-bold mb-3">Szczegóły techniczne:</h5>
                  <ul className="list-disc list-inside">
                    {product.specs && product.specs.length > 0 ? (
                      product.specs.map((spec, index) => (
                        <li key={index} className="mb-1">
                          <span className="font-semibold">{spec.name}:</span> {spec.value}
                        </li>
                      ))
                    ) : (
                      <li>Brak szczegółowej specyfikacji dla tego produktu.</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;