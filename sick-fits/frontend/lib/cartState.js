import { createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {
  const cartOpen = true;
  return <LocalStateProvider value={cartOpen}>{children}</LocalStateProvider>;
};

// make a custom hook for accessing local state
const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};
export { CartStateProvider , useCart };
