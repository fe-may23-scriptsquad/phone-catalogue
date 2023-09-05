import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isBurgerMenuActive,
        setIsBurgerMenuActive,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
