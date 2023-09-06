import React, { useState } from 'react';
import { AppContextType } from '../../types/AppContextType';
import { Phone } from '../../types/Phone';
import { useLocalStarage } from '../../hooks/useLocalStorage';
import { Order } from '../../types/Order';
import { CartProduct } from '../../types/CartProduct';

export const AppContext = React.createContext<AppContextType>({
  activeLink: '',
  setActiveLink: () => {},
  products: [],
  setProducts: () => {},
  cart: [],
  toggleCartItem: () => {},
  changeOrderItemQuantity: () => {},
  favouriteArr: [],
  setFavouriteArr: () => {},
  toggleFavouriteArr: () => {},
  totalCartQuantity: 0,
  totalCartPrice: 0,
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const [products, setProducts] = useState<Phone[]>([]);
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

  const totalCartQuantity =
    cart.reduce((a: number, b: Order) => a + b.quantity, 0) || 0;

  const totalCartPrice =
    cart.reduce((a: number, b: Order) => {
      return a + b.quantity * b.product.price;
    }, 0) || 0;

  return (
    <AppContext.Provider
      value={{
        activeLink,
        setActiveLink,
        products,
        setProducts,
        favouriteArr,
        setFavouriteArr,
        toggleFavouriteArr,
        cart,
        toggleCartItem,
        changeOrderItemQuantity,
        totalCartQuantity,
        totalCartPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
