import './Footer.scss';

import logo from '../../assets/img/Logo.png';
import arrow from '../../assets/img/arow_up.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="logo" href="index.html">
        <img src={logo} alt="Logo" />
      </a>

      <nav className="nav__list">
        <ul>
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

      <button className="butto-up" type="button">
        <img src={arrow} alt="back to top" />
      </button>
    </footer>
  );
};
