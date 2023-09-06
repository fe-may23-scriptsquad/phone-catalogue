import { CartProduct } from './CartProduct';
import { Order } from './Order';
import { Phone } from './Phone';
import { Quantities } from './Quantities';

export interface AppContextType {
  activeLink: string;
  setActiveLink: (value: string) => void;
  isBurgerMenuActive: boolean;
  setIsBurgerMenuActive: (value: boolean) => void;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  products: Phone[],
  setProducts: React.Dispatch<React.SetStateAction<Phone[]>>,
  cart: Order[];
  toggleCartItem: (product: CartProduct) => void;
  changeOrderItemQuantity: (value: number, prodId: string) => void;
  favouriteArr: string[];
  setFavouriteArr: (value: string[]) => void;
  toggleFavouriteArr: (id: string) => void;
  quantities: Quantities | null,
}
