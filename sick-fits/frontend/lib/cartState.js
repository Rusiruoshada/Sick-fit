import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <LocalStateProvider value={{ cartOpen, toggleCart, openCart, closeCart }}>
      {children}
    </LocalStateProvider>
  );
};

// make a custom hook for accessing local state
const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};
export { CartStateProvider, useCart };
