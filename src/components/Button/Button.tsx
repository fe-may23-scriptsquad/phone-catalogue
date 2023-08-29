import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <button
      className={cn('button', {
        'button--outlined': toggled,
      })}
      type="button"
      onClick={() => setToggled((prev) => !prev)}
    >
      {!toggled ? text : 'Added'}
    </button>
  );
};
