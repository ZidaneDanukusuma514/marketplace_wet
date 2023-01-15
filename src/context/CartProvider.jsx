import React, { createContext, useState } from "react";

export const ContextCart = createContext(null);

function CartProvider({ children }) {
  const [CartItem, setCartItem] = useState([]);

  const handleSelectItem = (data) => {
    setCartItem(data.data.title);
  };
  return (
    <ContextCart.Provider value={{ CartItem, handleSelectItem }}>
      {children}
    </ContextCart.Provider>
  );
}

export default CartProvider;
