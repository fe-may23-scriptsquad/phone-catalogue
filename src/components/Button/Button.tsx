import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import { CartProduct } from '../../types/CartProduct';
import { AppContext } from '../AppContext/AppContext';

type Props = {
  text: string;
  product?: CartProduct;
};

export const Button: React.FC<Props> = ({ text, product }) => {
  const value = useContext(AppContext);
  const isAdded = value?.cart.find((order) => order.product.id === product?.id);

  return product ? (
    <button
      className={cn('button', {
        'button--outlined': isAdded,
      })}
      type="button"
      onClick={() => value?.toggleCartItem(product)}
    >
      {!isAdded ? text : 'Added'}
    </button>
  ) : (
    <button className={cn('button')} type="button" onClick={() => {}}>
      {text}
    </button>
  );
};
