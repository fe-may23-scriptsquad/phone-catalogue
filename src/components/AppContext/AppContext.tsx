import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';
import { useLocalStarage } from '../../hooks/useLocalStorage';
import { Order } from '../../types/Order';
import { CartProduct } from '../../types/CartProduct';

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [favouriteArr, setFavouriteArr] = useLocalStarage<string[]>(
    'favPhone',
    [],
  );

  const toggleFavouriteArr = (id: string) => {
    if (!favouriteArr.includes(id)) {
      setFavouriteArr([...favouriteArr, id]);
    } else {
      setFavouriteArr(favouriteArr.filter((phoneId: string) => id !== phoneId));
    }
  };

  const [cart, setCart] = useLocalStarage<Order[]>('cart', []);

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
        favouriteArr,
        setFavouriteArr,
        toggleFavouriteArr,
        cart,
        toggleCartItem,
        changeOrderItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
