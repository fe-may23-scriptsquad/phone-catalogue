import React from 'react';
// import { Header } from './components/Header';
// import { CardItem } from './components/CardItem';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';

// const phone = {
//   id: '1',
//   category: 'phones',
//   phoneId: 'apple-iphone-7-32gb-black',
//   itemId: 'apple-iphone-7-32gb-black',
//   name: 'Apple iPhone 7 32GB Black',
//   fullPrice: 400,
//   price: 375,
//   screen: "4.7' IPS",
//   capacity: '32GB',
//   color: 'black',
//   ram: '2GB',
//   year: 2016,
//   image: 'img/phones/apple-iphone-7/black/00.jpg',
// };

function App() {
  return (
    <div className="App">
      {/* <Header />
      <CardItem phone={phone} /> */}
      <div className="container">
        <CartPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
