import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { UserModel } from '../../interfaces/user.interface';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  user: UserModel;
  name?: string;
  text?: string;
  onChange?: () => void;
}
