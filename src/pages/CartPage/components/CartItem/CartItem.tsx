import { useState, useEffect } from 'react';

import close from '../../../../assets/icons/Close.svg';
import minus from '../../../../assets/icons/Minus.svg';
import plus from '../../../../assets/icons/Plus.svg';
import { Order } from '../../../../types/Order';

type Props = {
  orderItem: Order;
  deleteOrderItem: (prodId: string) => void;
  changeOrderItemQuantity: (value: number, prodId: string) => void;
};

export const CartItem: React.FC<Props> = ({
  orderItem,
  deleteOrderItem,
  changeOrderItemQuantity,
}) => {
  const { product, quantity } = orderItem;

  const one = 'https://www.91-img.com/pictures/';
  const two = '143993-v4-apple-iphone-14-mobile-phone-large-4.jpg';
  const testImg = `${one}${two}`;

  const [number, setNumber] = useState(quantity);

  useEffect(() => {
    changeOrderItemQuantity(number, product.id);
  }, [number]);

  return (
    <li className="cart__item">
      <div className="cart__item-info">
        <button
          type="button"
          className="cart__item-delete"
          onClick={() => deleteOrderItem(product.id)}
        >
          <img src={close} alt="Close" />
        </button>

        <img className="cart__item-img" src={testImg} alt={product.name} />

        <h3 className="cart__item-title">{product.name}</h3>
      </div>

      <div className="cart__item-total">
        <div className="cart__item-btns">
          <button
            type="button"
            className="cart__item-btn"
            onClick={() => setNumber((prev) => prev - 1)}
            disabled={number === 1}
          >
            <img src={minus} alt="decrement" />
          </button>

          <p className="cart__item-number">{number}</p>

          <button
            type="button"
            className="cart__item-btn"
            onClick={() => setNumber((prev) => prev + 1)}
          >
            <img src={plus} alt="increment" />
          </button>
        </div>

        <h3 className="cart__item-price">{`$${product.price}`}</h3>
      </div>
    </li>
  );
};
