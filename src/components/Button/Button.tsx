import { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', ...props }: ButtonProps){
  return <ButtonComponent variant={variant} {...props} />;
};
