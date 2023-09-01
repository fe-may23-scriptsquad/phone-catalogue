import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      {/* <CardItem phone={phone} /> */}
    </div>
  );
}

export default App;
