import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/icons/Arrow-left.svg';

export const ButtonBack = () => {
  return (
    <div className="back">
      <img src={arrowLeft} alt="back" className="back-icon" />
      <Link to="/" className="back-label">
        Back
      </Link>
    </div>
  );
};
