import { useState } from 'react';
import classNames from 'classnames';

type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <button
      className={classNames('button', {
        'button--outlined': toggled,
      })}
      type="button"
      onClick={() => setToggled((prev) => !prev)}
    >
      {!toggled ? text : 'Added'}
    </button>
  );
};
