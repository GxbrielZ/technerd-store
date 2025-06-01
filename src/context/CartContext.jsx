import { createContext, useState, useContext, useEffect } from 'react';
import { discountCodes } from '../utils/discountCodes';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to read cart from localStorage", error);
      return [];
    }
  });
  const [appliedDiscountCode, setAppliedDiscountCode] = useState(() => {
    try {
      const localData = localStorage.getItem('appliedDiscountCode');
      return localData ? JSON.parse(localData) : null;
    } catch (error) {
      console.error("Failed to read appliedDiscountCode from localStorage", error);
      return null;
    }
  });
  const [discountValue, setDiscountValue] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('appliedDiscountCode', JSON.stringify(appliedDiscountCode));
    if (appliedDiscountCode) {
      applyDiscountLogic(appliedDiscountCode);
    } else {
      setDiscountValue(0);
      setDiscountApplied(false);
    }
  }, [cartItems, appliedDiscountCode]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const applyDiscountLogic = (discountObj) => {
    const currentTotalPrice = calculateTotalPrice();
    let calculatedDiscount = 0;

    if (discountObj.type === 'percentage') {
      calculatedDiscount = currentTotalPrice * discountObj.value;
    } else if (discountObj.type === 'fixed') {
      calculatedDiscount = discountObj.value;
    }

    setDiscountValue(calculatedDiscount);
    setDiscountApplied(true);
  };

  const applyDiscountCode = (code) => {
    const foundDiscount = discountCodes.find(dc => dc.code === code.toUpperCase());

    if (foundDiscount) {
      setAppliedDiscountCode(foundDiscount);
      return true;
    } else {
      setDiscountValue(0);
      setDiscountApplied(false);
      setAppliedDiscountCode(null);
      return false;
    }
  };

  const removeDiscount = () => {
    setDiscountValue(0);
    setDiscountApplied(false);
    setAppliedDiscountCode(null);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = calculateTotalPrice();
  const finalPrice = subtotal - discountValue;

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItemsInCart,
    subtotal,
    appliedDiscountCode,
    applyDiscountCode,
    removeDiscount,
    discountValue,
    discountApplied,
    finalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);