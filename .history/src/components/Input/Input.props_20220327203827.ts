import {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  Dispatch,
} from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  text?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate: (
    e: ChangeEvent<HTMLInputElement>,
    setIsValid: (arg: boolean) => Dispatch<React.SetStateAction<boolean>>,
    setMessage: (arg: string) => Dispatch<React.SetStateAction<string>>,
  ) => void;
  readOnly: boolean;
}
