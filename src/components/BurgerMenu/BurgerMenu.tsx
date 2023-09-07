/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/img/Logo.png';
import likeImage from '../../assets/icons/Favourites.svg';
import cartImage from '../../assets/icons/Shopping-cart.svg';
import closeImage from '../../assets/icons/Close.svg';
import { AppContext } from '../AppContext/AppContext';
import { AppContextType } from '../../types/AppContextType';

const buildClassnames = ({ isActive }: { isActive: boolean }): string => (
  cn('link', 'nav__link', {
    'nav__is-active': isActive,
  }));

export const BurgerMenu: React.FC = () => {
  const context = useContext(AppContext) as AppContextType;
  const { setIsBurgerMenuActive } = context;

  return (
    <aside className="burger">
      <div className="burger__top">
        <div className="burger__left">
          <NavLink
            to="/"
            className="header__logo"
          >
            <img
              src={logoImage}
              alt="NICE gadgets"
              className="header__logo-img header__logo-img--burger"
            />
          </NavLink>
        </div>
        <div
          className="burger__right"
          onClick={() => setIsBurgerMenuActive(false)}
        >
          <div className="icon__left icon__left--borders">
            <span className="icon__logo">
              <img
                src={closeImage}
                alt="favourites"
                className="icon__logo-img"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="burger__menu">
        <ul
          className="nav__list
                     nav__list--column
                     nav__list--centered"
        >
          <li>
            <NavLink
              to="home"
              className={buildClassnames}
              onClick={() => setIsBurgerMenuActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__wraper">
            <NavLink
              to="phones"
              className={buildClassnames}
              onClick={() => setIsBurgerMenuActive(false)}
            >
              Phones
            </NavLink>
          </li>
          <li className="nav__wraper">
            <NavLink
              to="tablets"
              className={buildClassnames}
              onClick={() => setIsBurgerMenuActive(false)}
            >
              Tablets
            </NavLink>
          </li>
          <li className="nav__wraper">
            <NavLink
              to="accessories"
              className={buildClassnames}
              onClick={() => setIsBurgerMenuActive(false)}
            >
              Accessories
            </NavLink>
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
            <a href="#cart" className="icon__logo">
              <img
                src={cartImage}
                alt="Cart"
                className="icon__logo-img icon__logo-img--burger"
                onClick={() => setIsBurgerMenuActive(false)}
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
