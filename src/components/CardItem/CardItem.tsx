import React from 'react';
import './card-item.scss';
import { Phone } from '../../types/Phone';
import { Button } from '../Button';
import like from '../../assets/icons/Favourites.svg';

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
      <img
        // src="../../assets/img/phones/apple-iphone-11/black/00.jpg"
        src={testImg}
        alt={phone.name}
        className="card__image"
      />

      <h2 className="card__title">{phone.name}</h2>

      <div className="card__price">
        <>
          <span className="card__price--bold">{`$${phone.price}`}</span>
          <span className="card__price--grey">{`$${phone.fullPrice}`}</span>
        </>
      </div>

      <div className="card__stats">
        <p className="card__stat">
          <span className="card__stat__name">Screen</span>
          {phone.screen}
        </p>
        <p className="card__stat">
          <span className="card__stat__name">Capacity</span>
          {phone.capacity}
        </p>
        <p className="card__stat">
          <span className="card__stat__name">RAM</span>
          {phone.ram}
        </p>
      </div>

      <div className="card__btns">
        <Button text="Add to cart" handler={() => {}} />

        <a href="/#" className="button-like">
          <img className="icon" src={like} alt="like" />
        </a>
      </div>
    </div>
  );
};
