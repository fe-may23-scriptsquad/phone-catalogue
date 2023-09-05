import { useState } from 'react';

import like from '../../assets/icons/Favourites.svg';
import likeFilled from '../../assets/icons/Favourites-filled.svg';

export const ButtonLike: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      className="button__like"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <img className="icon" src={!isActive ? like : likeFilled} alt="like" />
    </button>
  );
};
