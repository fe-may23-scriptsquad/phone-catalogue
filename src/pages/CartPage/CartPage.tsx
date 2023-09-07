import { useContext } from 'react';

import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
// import { CartItem } from './components/CartItem';
import { AppContext } from '../../components/AppContext/AppContext';
// import { EmptyValueComponent } from '../../components/EmptyValueComponent';
import { AppContextType } from '../../types/AppContextType';
import { CartItem } from './components/CartItem';
import { EmptyValueComponent } from '../../components/EmptyValueComponent';

export const CartPage: React.FC = () => {
  const { cart, cartProducts, totalCartQuantity, totalPrice } = useContext(
    AppContext,
  ) as AppContextType;

  return (
    <div className="cart">
      <ButtonBack />

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <ul className="cart__list">
          {cartProducts.length ? (
            cartProducts.map((product) => {
              const currentOrder = cart.find(
                (order) => product.itemId === order.productId,
              );

              return (
                <CartItem
                  key={product.itemId}
                  product={product}
                  quantity={currentOrder?.quantity || 1}
                />
              );
            })
          ) : (
            <EmptyValueComponent />
          )}
        </ul>

        {cart.length > 0 && (
          <div className="cart__info">
            <div className="cart__info-price">
              <h2 className="cart__info-value">{`$${totalPrice}`}</h2>

              <p className="cart__info-label">
                {`Total for ${totalCartQuantity} items`}
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
