import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../../components/AppContext/AppContext';
import { Quantities } from '../../../../types/Quantities';

type Props = {
  linkTo: string;
  title: string;
  image: string | undefined;
};

export const Category: React.FC<Props> = ({ linkTo, title, image }) => {
  const {
    quantities,
  } = useContext(AppContext);

  return (
    <div className="category">
      <Link to={linkTo} className="category__image">
        <img src={image} alt={`link to ${linkTo.slice(1)}`} />
      </Link>
      <Link to={linkTo} className="category__title">
        {title}
      </Link>
      <p className="category__products-amount">
        {`${quantities
          ? quantities[linkTo.slice(1) as keyof Quantities]
          : 0} `}
        models
      </p>
    </div>
  );
};
