import React from 'react';
import { Link } from 'react-router-dom';

import { Phone } from '../../types/Phone';
import { Button } from '../Button';
import { ButtonLike } from '../ButtonLike';
import { LineElement } from '../LineElement';

type Props = {
  phone: Phone;
};

// eslint-disable-next-line max-len
const one = 'https://www.91-img.com/pictures/';
const two = '143993-v4-apple-iphone-14-mobile-phone-large-4.jpg';
const testImg = `${one}${two}`;

export const CardItem: React.FC<Props> = ({ phone }) => {
  return (
    <div className="card">
      <Link to={`/phones/${phone.itemId}`}>
        <img src={testImg} alt={phone.name} className="card__image" />
      </Link>

      <Link to={`/phones/${phone.itemId}`}>
        <h2 className="card__title">{phone.name}</h2>
      </Link>

      <div className="card__price">
        <>
          <span className="card__price--bold">{`$${phone.price}`}</span>
          {phone.fullPrice && (
            <span className="card__price--grey">{`$${phone.fullPrice}`}</span>
          )}
        </>
      </div>

      <LineElement />

      <div className="card__stats">
        <p className="card__stat">
          <span className="card__stat--name">Screen</span>
          {phone.screen}
        </p>
        <p className="card__stat">
          <span className="card__stat--name">Capacity</span>
          {phone.capacity}
        </p>
        <p className="card__stat">
          <span className="card__stat--name">RAM</span>
          {phone.ram}
        </p>
      </div>

      <div className="card__btns">
        <Button text="Add to cart" />
        <ButtonLike />
      </div>
    </div>
  );
};
