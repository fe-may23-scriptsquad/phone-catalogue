import React from 'react';
import './card-item.scss';
import { Phone } from '../../types/Phone';
import { Button } from '../Button';

type Props = {
  phone: Phone;
};

export const CardItem: React.FC<Props> = ({ phone }) => {
  return (
    <div className="card">
      <img
        src={`../../assets${phone.image}`}
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

        <button type="button" className="button-like">
          Like
        </button>
      </div>
    </div>
  );
};
