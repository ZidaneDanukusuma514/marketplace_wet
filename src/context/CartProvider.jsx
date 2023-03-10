import React, { createContext, useState } from "react";

export const ContextCart = createContext(null);

function CartProvider({ children }) {
  const [CartItem, setCartItem] = useState([]);

  const handleSelectItem = (prop) => {
    setCartItem([prop, ...CartItem]);
  };
  return (
    <ContextCart.Provider value={{ CartItem, handleSelectItem }}>
      {children}
    </ContextCart.Provider>
  );
}

export default CartProvider;
