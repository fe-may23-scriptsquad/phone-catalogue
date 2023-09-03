import { useState, useEffect } from 'react';

import arrowLeft from '../../assets/icons/Arrow-left.svg';
import { Button } from '../../components/Button';
import { CartItem } from './components/CartItem';
import { Order } from '../../types/Order';

const testData = [
  {
    product: {
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

    quantity: 2,
  },
  {
    product: {
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

    quantity: 1,
  },
  {
    product: {
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

    quantity: 1,
  },
];

export const CartPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [fullOrder, setFullOrder] = useState<Order[]>(testData);

  const deleteOrderItem = (prodId: string) => {
    setFullOrder((prevOrder) => {
      return prevOrder.filter(({ product }) => product.id !== prodId);
    });
  };

  const changeOrderItemQuantity = (value: number, prodId: string) => {
    setFullOrder((prevOrder) => prevOrder.map((orderItem) => {
      const { product } = orderItem;

      if (product.id === prodId) {
        return {
          product,
          quantity: value,
        };
      }

      return orderItem;
    }));
  };

  const calculateTotalPrice = () => {
    return fullOrder.reduce((a, b) => {
      return a + b.quantity * b.product.price;
    }, 0);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [fullOrder]);

  return (
    <div className="cart">
      <div className="cart__back">
        <img src={arrowLeft} alt="back" className="cart__back-icon" />
        <span className="cart__back-label">Back</span>
      </div>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {fullOrder.map((orderItm) => (
            <CartItem
              key={orderItm.product.id}
              orderItem={orderItm}
              deleteOrderItem={deleteOrderItem}
              changeOrderItemQuantity={changeOrderItemQuantity}
            />
          ))}
        </ul>

        <div className="cart__info">
          <div className="cart__info-price">
            <h2 className="cart__info-value">{`$${totalPrice}`}</h2>

            <p className="cart__info-label">Total for 3 items</p>
          </div>

          <div className="cart__buybutton">
            <Button text="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};
