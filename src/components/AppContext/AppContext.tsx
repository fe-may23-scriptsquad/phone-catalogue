import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';
import { useLocalStarage } from '../../hooks/useLocalStorage';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [favouriteArr, setFavouriteArr] = useLocalStarage<string[]>(
    'favPhone',
    [],
  );

  const toggleFavouriteArr = (id: string) => {
    if (!favouriteArr.includes(id)) {
      setFavouriteArr([...favouriteArr, id]);
    } else {
      setFavouriteArr(favouriteArr.filter((phoneId: string) => id !== phoneId));
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
        favouriteArr,
        setFavouriteArr,
        toggleFavouriteArr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
