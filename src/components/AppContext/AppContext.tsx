import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';
import { Phone } from '../../types/Phone';

export const AppContext = React.createContext<AppContextType>({
  activeLink: '',
  setActiveLink: () => {},
  products: [],
  setProducts: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [products, setProducts] = useState<Phone[]>([]);

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
