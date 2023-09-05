import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';
import { useLocalStarage } from '../../hooks/useLocalStorage';
import { Order } from '../../types/Order';
import { CartProduct } from '../../types/CartProduct';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const testCartData = [
  {
    product: {
      id: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      price: 500,
      img: 'img/phones/apple-iphone-7-plus/black/00.jpg',
    },

    quantity: 2,
  },
  {
    product: {
      id: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      price: 550,
      img: 'img/phones/apple-iphone-8/gold/00.jpg',
    },

    quantity: 1,
  },
  {
    product: {
      id: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      price: 880,
      img: 'img/phones/apple-iphone-11/black/00.jpg',
    },

    quantity: 1,
  },
];

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [cart, setCart] = useLocalStarage<Order[]>('cart', testCartData);

  const toggleCartItem = (product: CartProduct) => {
    const findedProduct = cart.find((order) => order.product.id === product.id);

    if (findedProduct) {
      setCart(cart.filter((order) => order.product.id !== product.id));

      return;
    }

    setCart([...cart, { product, quantity: 1 }]);
  };

  const changeOrderItemQuantity = (value: number, prodId: string) => {
    setCart(
      cart.map((orderItem) => {
        const { product } = orderItem;

        if (product.id === prodId) {
          return {
            product,
            quantity: value,
          };
        }

        return orderItem;
      }),
    );
  };

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
        cart,
        toggleCartItem,
        changeOrderItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
