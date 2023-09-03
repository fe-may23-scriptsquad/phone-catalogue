import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import logoImage from '../../assets/img/Logo.png';
import likeImage from '../../assets/icons/Favourites.svg';
import cartImage from '../../assets/icons/Shopping-cart.svg';
import closeImage from '../../assets/icons/Close.svg';

export const BurgerMenu: React.FC = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <aside className="burger">
      <div className="burger__top">
        <div className="burger__left">
          <a href="#home" className="header__logo">
            <img
              src={logoImage}
              alt="NICE gadgets"
              className="header__logo-img"
            />
          </a>
        </div>
        <div className="burger__right">
          <div className="icon__left icon__left--borders">
            <a href="#favourites" className="icon__logo">
              <img
                src={closeImage}
                alt="favourites"
                className="icon__logo-img"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="burger__menu">
        <ul className="nav__list nav__list--column nav__list--centered">
          <li>
            <a
              href="#home"
              className={cn('link', 'nav__link', {
                'nav__is-active': activeLink === 'home',
              })}
              onClick={() => setActiveLink('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Phones"
              className="link nav__link"
            >
              Phones
            </a>
          </li>
          <li>
            <a
              href="#Tablets"
              className="link nav__link"
            >
              Tablets
            </a>
          </li>
          <li>
            <a
              href="#accessories"
              className="link nav__link"
            >
              Accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="burger__bottom">
        <div>
          <div
            className="icon__left
                       icon__hover"
          >
            <a href="#favourites" className="icon__logo">
              <img
                src={likeImage}
                alt="favourites"
                className="icon__logo-img icon__logo-img--burger"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="icon__right icon__cart icon__hover">
            <a href="#Cart" className="icon__logo">
              <img
                src={cartImage}
                alt="Cart"
                className="icon__logo-img icon__logo-img--burger"
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
