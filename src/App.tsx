import React from 'react';
// import { NotFoundPage } from './components/NotFoundPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartPage } from './components/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CartPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
