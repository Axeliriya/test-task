import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { UserModel } from '../../interfaces/user.interface';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  text?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly: boolean;
}
