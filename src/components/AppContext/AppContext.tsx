import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [favouriteArr, setFavouriteArr] = useState<string[]>([]);

  // eslint-disable-next-line
  console.log(favouriteArr);

  const toggleFavouriteArr = (id: string) => {
    if (!favouriteArr.includes(id)) {
      setFavouriteArr((favArr) => [...favArr, id]);
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
