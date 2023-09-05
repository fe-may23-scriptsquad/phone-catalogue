import { useState, useEffect, useContext } from 'react';
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
import { CartItem } from './components/CartItem';
import { AppContext } from '../../components/AppContext/AppContext';

export const CartPage: React.FC = () => {
  const value = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = () => {
    return (
      value?.cart.reduce((a, b) => {
        return a + b.quantity * b.product.price;
      }, 0) || 0
    );
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [value?.cart]);

  return (
    <div className="cart">
      <ButtonBack />

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {value?.cart.map((orderItm) => (
            <CartItem key={orderItm.product.id} orderItem={orderItm} />
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
