import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiShoppingCart, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    appliedDiscountCode,
    applyDiscountCode,
    removeDiscount,
    discountValue,
    discountApplied,
    finalPrice
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  useEffect(() => {
    if (appliedDiscountCode) {
      setCouponInput(appliedDiscountCode.code);
      setCouponMessage('Kupon ' + appliedDiscountCode.code + ' jest aktywny!');
    } else {
      setCouponInput('');
      setCouponMessage('');
    }
    window.scrollTo(0, 0);
  }, [appliedDiscountCode]);

  const handleApplyCoupon = () => {
    const success = applyDiscountCode(couponInput);
    if (success) {
      setCouponMessage('Kupon ' + couponInput.toUpperCase() + ' zastosowany pomyślnie!');
    } else {
      setCouponMessage('Nieprawidłowy kod kuponu. Spróbuj ponownie.');
    }
  };

  const handleRemoveDiscount = () => {
    removeDiscount();
    setCouponInput('');
    setCouponMessage('Kupon został usunięty.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="font-roboto bg-darkwhite text-lightgrey py-16 px-4 sm:px-6 lg:px-8 mt-4 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
        <FiShoppingCart size={60} className="text-gray-400 mb-6" />
        <h2 className="text-2xl font-bold mb-4">Twój koszyk jest pusty</h2>
        <p className="text-lg text-gray-600 mb-8">Dodaj produkty, aby zobaczyć je tutaj.</p>
        <Link
          to="/"
          className="bg-primary hover:bg-[#169168] text-darkwhite font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="font-roboto bg-darkwhite text-lightgrey py-8 px-4 sm:px-6 lg:px-8 mt-4 min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left md:pl-2">Twój Koszyk</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sekcja produktów w koszyku */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-6 text-lightgrey">Produkty w koszyku</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 last:border-b-0">
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                  <img
                    src={item.image || 'https://via.placeholder.com/80'}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md mr-4 border border-gray-200"
                  />
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="text-lg font-semibold text-lightgrey hover:text-primary duration-300">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500">Cena jednostkowa: {item.price.toFixed(2)} zł</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-lg font-bold text-lightgrey hover:bg-gray-200 rounded-l-lg duration-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-12 text-center py-1 border-x border-gray-300 outline-none text-lightgrey
                                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-lg font-bold text-lightgrey hover:bg-gray-200 rounded-r-lg duration-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-bold text-primary w-24 text-right">{(item.price * item.quantity).toFixed(2)} zł</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:text-red-700 duration-200"
                    title="Usuń z koszyka"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sekcja podsumowania i kuponu */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 flex flex-col sticky top-4">
            <h2 className="text-2xl font-bold mb-6 text-lightgrey">Podsumowanie zamówienia</h2>

            <div className="mb-4">
              <label htmlFor="coupon" className="block text-lightgrey text-md font-semibold mb-2">
                Kod rabatowy
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="coupon"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg outline-none focus:border-primary text-lightgrey"
                  placeholder="Wpisz kod kuponu"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value);
                    setCouponMessage('');
                  }}
                  disabled={discountApplied}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-primary hover:bg-[#169168] text-darkwhite px-4 py-2 rounded-r-lg font-semibold duration-300"
                  disabled={discountApplied}
                >
                  Zastosuj
                </button>
              </div>
              {couponMessage && (
                <p className={`mt-2 text-sm ${discountApplied ? 'text-green-600' : 'text-red-500'}`}>
                  {couponMessage}
                </p>
              )}

              {/* Wyświetlanie zastosowanego kuponu i opcja usunięcia */}
              {appliedDiscountCode && (
                <div className="flex items-center justify-between bg-gray-100 text-lightgrey p-3 rounded-md mt-4">
                  <span className="font-semibold">Zastosowany kupon: {appliedDiscountCode.display}</span>
                  <button
                    onClick={handleRemoveDiscount}
                    className="text-red-500 hover:text-red-700 duration-200 ml-4"
                    title="Usuń kupon"
                  >
                    <FiXCircle size={20} />
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-auto">
              <div className="flex justify-between items-center text-lg mb-2">
                <span>Wartość produktów:</span>
                <span className="font-semibold">{subtotal.toFixed(2)} zł</span>
              </div>
              <div className="flex justify-between items-center text-lg mb-2">
                <span>Rabat:</span>
                <span className="font-semibold text-rose">- {discountValue.toFixed(2)} zł</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold border-t border-gray-300 pt-3 mt-3">
                <span>Do zapłaty:</span>
                <span className="text-primary">{finalPrice.toFixed(2)} zł</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-[#169168] text-darkwhite font-bold py-3 rounded-lg mt-6 duration-300">
              Przejdź do kasy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
