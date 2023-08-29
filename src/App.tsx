import React from 'react';
import { Header } from './components/Header';
import { CardItem } from './components/CardItem';

const info = {
  id: '2',
  category: 'phones',
  phoneId: 'apple-iphone-7-plus-32gb-black',
  itemId: 'apple-iphone-7-plus-32gb-black',
  name: 'Apple iPhone 7 Plus 32GB Black',
  fullPrice: 540,
  price: 500,
  screen: "5.5' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '3GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
};

function App() {
  return (
    <div className="App">
      <Header />
      <CardItem phone={info} />
    </div>
  );
}

export default App;
