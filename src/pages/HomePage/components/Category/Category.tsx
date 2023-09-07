import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../../../../assets/img/categories/category-tablets.png';

type Props = {
  linkTo: string;
  title: string;
  image: string | undefined;
};

export const Category: React.FC<Props> = ({ linkTo, title, image }) => {
  return (
    <div className="category">
      <Link to={linkTo} className="category__image">
        <img src={image} alt={`link to ${linkTo.slice(1)}`} />
      </Link>
      <Link to={linkTo} className="category__title">
        {title}
      </Link>
      <p className="category__products-amount">0 models</p>
    </div>
  );
};
