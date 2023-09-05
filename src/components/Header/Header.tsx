/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import logoImage from '../../assets/img/Logo.png';
import likeImage from '../../assets/icons/Favourites.svg';
import cartImage from '../../assets/icons/Shopping-cart.svg';
import menuImage from '../../assets/icons/Burger-menu.svg';

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container--left">
          <a href="#home" className="header__logo">
            <img
              src={logoImage}
              alt="NICE gadgets"
              className="header__logo-img"
            />
          </a>

          <nav>
            <div className="nav">
              <ul className="nav__list">
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
                <li className="nav__wraper">
                  <a
                    href="#phones"
                    className={cn('link', 'nav__link', {
                      'nav__is-active': activeLink === 'phones',
                    })}
                    onClick={() => setActiveLink('phones')}
                  >
                    Phones
                  </a>
                </li>
                <li className="nav__wraper">
                  <a
                    href="#tablets"
                    className={cn('link', 'nav__link', {
                      'nav__is-active': activeLink === 'tablets',
                    })}
                    onClick={() => setActiveLink('tablets')}
                  >
                    Tablets
                  </a>
                </li>
                <li className="nav__wraper">
                  <a
                    href="#accessories"
                    className={cn('link', 'nav__link', {
                      'nav__is-active': activeLink === 'accessories',
                    })}
                    onClick={() => setActiveLink('accessories')}
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="icon">
          <div
            className={`icon__left
                icon__left--borders
                ${
                  activeLink === 'favourites'
                    ? 'icon__left--active'
                    : 'icon__left--invisible'
                }`}
          >
            <a href="#favourites" className="icon__logo">
              <img
                src={likeImage}
                alt="favourites"
                className="icon__logo-img icon__logo-img--margins"
                onClick={() => setActiveLink('favourites')}
              />
            </a>
          </div>

          <div
            className={`
                          icon__right
                        ${
                          activeLink === 'cart'
                            ? 'icon__right--active'
                            : 'icon__right--invisible'
                        }
            `}
          >
            <a href="#cart" className="icon__logo">
              <img
                src={cartImage}
                alt="Cart"
                className="icon__logo-img icon__logo-img--margins"
                onClick={() => setActiveLink('cart')}
              />
            </a>
          </div>

          <div className="icon__burger">
            <a href="#home" className="icon__logo">
              <img src={menuImage} alt="Menu" className="icon__logo-img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
