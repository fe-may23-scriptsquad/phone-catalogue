import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
