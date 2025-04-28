// CartContext.js
import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const reduceQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Mark item for removal
          }
        }
        return item;
      }).filter(item => item !== null); // Remove items with null
    });
  };
  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return null; // Mark item for removal
          }
        }
        return item;
      }).filter(item => item !== null); // Remove items with null
    });
  };

  // total items in cart (counting quantities)
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, reduceQuantity, increaseQuantity, cartCount,totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
