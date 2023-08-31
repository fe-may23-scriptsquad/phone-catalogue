import { Button } from '../Button';
import { CartItem } from '../CartItem';

import arrowLeft from '../../assets/icons/Arrow-left.svg';

const testData = [
  {
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
  },
  {
    id: '3',
    category: 'phones',
    phoneId: 'apple-iphone-8-64gb-gold',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.jpg',
  },
  {
    id: '4',
    category: 'phones',
    phoneId: 'apple-iphone-11-64gb-black',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.jpg',
  },
  // {
  //   id: '2',
  //   category: 'phones',
  //   phoneId: 'apple-iphone-7-plus-32gb-black',
  //   itemId: 'apple-iphone-7-plus-32gb-black',
  //   name: 'Apple iPhone 7 Plus 32GB Black',
  //   fullPrice: 540,
  //   price: 500,
  //   screen: '5.5\' IPS',
  //   capacity: '32GB',
  //   color: 'black',
  //   ram: '3GB',
  //   year: 2016,
  //   image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  // },
  // {
  //   id: '3',
  //   category: 'phones',
  //   phoneId: 'apple-iphone-8-64gb-gold',
  //   itemId: 'apple-iphone-8-64gb-gold',
  //   name: 'Apple iPhone 8 64GB Gold',
  //   fullPrice: 600,
  //   price: 550,
  //   screen: '4.7\' IPS',
  //   capacity: '64GB',
  //   color: 'gold',
  //   ram: '2GB',
  //   year: 2017,
  //   image: 'img/phones/apple-iphone-8/gold/00.jpg',
  // },
  // {
  //   id: '4',
  //   category: 'phones',
  //   phoneId: 'apple-iphone-11-64gb-black',
  //   itemId: 'apple-iphone-11-64gb-black',
  //   name: 'Apple iPhone 11 64GB Black',
  //   fullPrice: 932,
  //   price: 880,
  //   screen: '6.1\' IPS',
  //   capacity: '64GB',
  //   color: 'black',
  //   ram: '4GB',
  //   year: 2019,
  //   image: 'img/phones/apple-iphone-11/black/00.jpg',
  // },
];

export const CartPage: React.FC = () => {
  return (
    <div className="cart">
      <div className="cart__back">
        <img src={arrowLeft} alt="back" className="cart__back-icon" />
        <span className="cart__back-label">Back</span>
      </div>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {testData.map((phone) => (
            <CartItem key={phone.id} phone={phone} />
          ))}
        </ul>

        <div className="cart__info">
          <div className="cart__info-price">
            <h2 className="cart__info-value">$2657</h2>

            <p className="cart__info-label">Total for 3 items</p>
          </div>

          <Button text="Checkout" />
        </div>
      </div>
    </div>
  );
};
