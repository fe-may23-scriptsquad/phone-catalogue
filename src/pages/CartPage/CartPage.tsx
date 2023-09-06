import { useState, useEffect, useContext } from 'react';
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
import { CartItem } from './components/CartItem';
import { AppContext } from '../../components/AppContext/AppContext';
import { EmptyValueComponent } from '../../components/EmptyValueComponent';
import { Order } from '../../types/Order';
import { AppContextType } from '../../types/AppContextType';

export const CartPage: React.FC = () => {
  const { cart } = useContext(AppContext) as AppContextType;
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = () => {
    return (
      cart.reduce((a: number, b: Order) => {
        return a + b.quantity * b.product.price;
      }, 0) || 0
    );
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  return (
    <div className="cart">
      <ButtonBack />

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {cart.length ? (
            cart.map((orderItm) => (
              <CartItem key={orderItm.product.id} orderItem={orderItm} />
            ))
          ) : (
            <EmptyValueComponent />
          )}
        </ul>

        {cart.length > 0 && (
          <div className="cart__info">
            <div className="cart__info-price">
              <h2 className="cart__info-value">{`$${totalPrice}`}</h2>

              <p className="cart__info-label">
                {`Total for ${cart.length} items`}
              </p>
            </div>

            <div className="cart__buybutton">
              <Button text="Checkout" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
