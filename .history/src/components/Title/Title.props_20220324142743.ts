import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTML>, HTML> {
  children: ReactNode;
  color?: 'white' | 'gray';
}
