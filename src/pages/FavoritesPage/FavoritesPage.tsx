import React from 'react';
import { CardItem } from './components/CardItem';

const phone = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const Favorites = () => {
  return (
    <div className="favorites">
      <h1 className="favorites__header">Favorites</h1>
      <div className="favorites__amount"> 5 items</div>
      <div className="favorites__grid">
        <div className="favorites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favorites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favorites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favorites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favorites__card">
          <CardItem phone={phone} />
        </div>
      </div>
    </div>
  );
};
