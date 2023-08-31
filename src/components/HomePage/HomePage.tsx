import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Footer />
      <BurgerMenu />
    </div>
  );
};
