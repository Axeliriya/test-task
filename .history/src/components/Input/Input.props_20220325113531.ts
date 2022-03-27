import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  onChange: () => void;
}
