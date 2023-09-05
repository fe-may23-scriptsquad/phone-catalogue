import { SetStateAction } from 'react';
import { Phone } from './Phone';
import { CartProduct } from './CartProduct';
import { Order } from './Order';

export interface AppContextType {
  activeLink: string;
  setActiveLink: React.Dispatch<SetStateAction<string>>;
  products: Phone[],
  setProducts: React.Dispatch<SetStateAction<Phone[]>>,
  cart: Order[];
  toggleCartItem: (product: CartProduct) => void;
  changeOrderItemQuantity: (value: number, prodId: string) => void;
  favouriteArr: string[];
  setFavouriteArr: (value: string[]) => void;
  toggleFavouriteArr: (id: string) => void;
}
