import React from 'react';
import './Header.scss';
import logoImage from '../../assets/img/Logo.png';
import likeImage from '../../assets/icons/Favourites.svg';
import cartImage from '../../assets/icons/Shopping-cart.svg';
import menuImage from '../../assets/icons/Burger-menu.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="container__left">
          <a
            href="#home"
            className="container__logo"
          >
            <img
              src={logoImage}
              alt="NICE gadgets"
              className="container__logo-img"
            />
          </a>

          <nav>
            <div className="nav">
              <ul className="nav__list">
                <li>
                  <a
                    href="#apple"
                    className="link nav__link nav__is-active"
                  >
                    Home
                  </a>
                </li>
                <li className="nav__wraper">
                  <a
                    href="#Samsung"
                    className="link nav__link"
                  >
                    Phones
                  </a>
                </li>
                <li className="nav__wraper">
                  <a
                    href="#Smartphones"
                    className="link nav__link"
                  >
                    Tablets
                  </a>
                </li>
                <li className="nav__wraper">
                  <a
                    href="#Laptops & Computers"
                    className="link nav__link"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="icon">
          <div className="icon__left">
            <a
              href="#favourites"
              className="icon__logo"
            >
              <img
                src={likeImage}
                alt="favourites"
                className="icon__logo-img"
              />
            </a>
          </div>
          <div className="icon__right">
            <a
              href="#Cart"
              className="icon__logo"
            >
              <img
                src={cartImage}
                alt="Cart"
                className="icon__logo-img"
              />
            </a>
          </div>
          <div className="icon__burger">
            <a
              href="#home"
              className="icon__logo"
            >
              <img
                src={menuImage}
                alt="Menu"
                className="icon__logo-img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
