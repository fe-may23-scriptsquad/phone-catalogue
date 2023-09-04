import React from 'react';

export const AppContext = React.createContext(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
