import { InputHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  text?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly: boolean;
}
