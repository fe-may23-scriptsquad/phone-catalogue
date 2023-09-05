import { CartProduct } from './CartProduct';

export interface Order {
  product: CartProduct;
  quantity: number;
}
