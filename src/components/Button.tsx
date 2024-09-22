import React from 'react'

import { useTheme } from '../hooks';
import { ETheme } from '../interfaces';

type TButtonVariant = 'primary' | 'secondary' | 'warn' | 'error';
type TButtonType = 'button' | 'submit' | 'reset'

interface IButtonProps {
  children?: React.ReactNode;
  variant?: TButtonVariant;
  disabled?: boolean;
  outlined?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: TButtonType;
}

const Button = (props: IButtonProps) => {
  const {
    children,
    variant = 'primary',
    disabled = false,
    outlined = false,
    onClick,
    type = 'button',
  } = props;

  const [theme] = useTheme();

  const buttonStyles =
    theme === ETheme.Light
      ? { background: 'white', color: 'black' }
      : { background: 'black', color: 'white' };

  return (
    <button
      type={type}
      className={`button button--${variant} ${
        outlined ? 'button--outlined' : ''
      }`}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
