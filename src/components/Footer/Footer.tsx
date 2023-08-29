import logo from '../../assets/img/Logo.png';

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
        <div className="button__content">Back to top</div>
        <div className="botton__icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#B4BDC4"
              fill="#FFFFFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line
              d="M13.5286 11.5286C13.789 11.2683 14.2111 11.2683 14.4714 11.5286L18.4714 15.5286C18.7318 15.789 18.7318 16.2111 18.4714 16.4714L14.4714 20.4714C14.2111 20.7318 13.789 20.7318 13.5286 20.4714C13.2683 20.2111 13.2683 19.789 13.5286 19.5286L17.0572 16L13.5286 12.4714C13.2683 12.2111 13.2683 11.789 13.5286 11.5286Z"
              fill="#0F0F11"
            />
          </svg>
        </div>
      </button>
    </footer>
  );
};
