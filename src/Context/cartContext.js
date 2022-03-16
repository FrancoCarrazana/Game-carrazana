import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItems) => {
    if (items.some(({ item }) => item.id === currentItems.item.id)) return;
    setItems([...items, currentItems]);
  };

  const removeItem = (item) => {
    const remove = items.filter((a) => a.id !== item.id);
    setItems(remove);
  };

  const clearItem = () => {
    setItems([]);
  };
  const moreItem = (item) => {
    const moreCartItem = items.map((a) => {
      if (a.id === item.id && a.calculation < item.stock) {
        return { ...a, calculation: a.calculation + 1 };
      }
      return a;
    });
    setItems(moreCartItem);
  };

  const lessItem = (item) => {
    const lessCartItem = items.map((a) => {
      if (a.id === item.id && a.calculation > 1) {
        return { ...a, calculation: a.calculation - 1 };
      }
      return a;
    });
    setItems(lessCartItem);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItem,
        moreItem,
        lessItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
