import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLAnchorElement>;

export const SliderButton = ({
  className,
  children,
  disabled,
  ...props
}: Props) => {
  return (
    <a className={cn(className, { disabled })} {...props}>
      {children}
    </a>
  );
};
