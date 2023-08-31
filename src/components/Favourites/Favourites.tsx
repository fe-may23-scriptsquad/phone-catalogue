import React from 'react';
import { CardItem } from '../CardItem';
import { Header } from '../Header';
import { Footer } from '../Footer';

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

export const Favourites = () => {
  return (
    <div className="favourites">
      <Header />
      <h1 className="favourites__header">Favourites</h1>
      <div className="favourites__amount"> 5 items</div>
      <div className="favourites__grid">
        <div className="favourites__card">
          <CardItem phone={phone} />
        </div>
        <div>
          <CardItem phone={phone} />
        </div>
        <div className="favourites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favourites__card">
          <CardItem phone={phone} />
        </div>
        <div className="favourites__card">
          <CardItem phone={phone} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
