import { CartProduct } from './CartProduct';
import { Order } from './Order';

export interface AppContextType {
  activeLink: string;
  setActiveLink: (value: string) => void;
  cart: Order[];
  toggleCartItem: (product: CartProduct) => void;
  changeOrderItemQuantity: (value: number, prodId: string) => void;
}
