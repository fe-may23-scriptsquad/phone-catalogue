import React from 'react';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/img/Logo.png';
import likeImage from '../../assets/icons/Favourites.svg';
import cartImage from '../../assets/icons/Shopping-cart.svg';
import menuImage from '../../assets/icons/Burger-menu.svg';

const buildClassnames = ({ isActive }: { isActive: boolean }): string =>
  cn('link', 'nav__link', {
    'nav__is-active': isActive,
  });

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container--left">
          <NavLink to="/" className="header__logo">
            <img
              src={logoImage}
              alt="NICE gadgets"
              className="header__logo-img"
            />
          </NavLink>

          <nav>
            <div className="nav">
              <ul className="nav__list">
                <li>
                  <NavLink to="home" className={buildClassnames}>
                    Home
                  </NavLink>
                </li>
                <li className="nav__wraper">
                  <NavLink to="phones" className={buildClassnames}>
                    Phones
                  </NavLink>
                </li>
                <li className="nav__wraper">
                  <NavLink to="tablets" className={buildClassnames}>
                    Tablets
                  </NavLink>
                </li>
                <li className="nav__wraper">
                  <NavLink to="accessories" className={buildClassnames}>
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="icon">
          <NavLink
            to="favorites"
            className={({ isActive }) => {
              return cn('icon__left', 'icon__left--borders', {
                'icon__left--active': isActive,
              });
            }}
          >
            <span className="icon__logo">
              <img
                src={likeImage}
                alt="favourites"
                className="icon__logo-img icon__logo-img--margins"
              />
            </span>
          </NavLink>

          <NavLink
            to="cart"
            className={({ isActive }) => {
              return cn('icon__right', {
                'icon__left--active': isActive,
              });
            }}
          >
            <span className="icon__logo">
              <img
                src={cartImage}
                alt="Cart"
                className="icon__logo-img icon__logo-img--margins"
              />
            </span>
          </NavLink>

          <div className="icon__burger">
            <Link to="home" className="icon__logo">
              <img src={menuImage} alt="Menu" className="icon__logo-img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
