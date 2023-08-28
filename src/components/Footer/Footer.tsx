import './Footer.scss';

import logo from '../../assets/img/Logo.png';
import arrow from '../../assets/img/Arrow-button.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="logo" href="index.html">
        <img src={logo} alt="Logo" />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="index.html" className="nav__link">
              Github
            </a>
          </li>
          <li className="nav__item">
            <a href="index.html" className="nav__link">
              Contacts
            </a>
          </li>
          <li className="nav__item">
            <a href="index.html" className="nav__link">
              Rights
            </a>
          </li>
        </ul>
      </nav>

      <button className="button" type="button">
        <img src={arrow} alt="back to top" className="button-arrow" />
      </button>
    </footer>
  );
};
