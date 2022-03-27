import {
  ChangeEvent,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  KeyboardEvent,
} from 'react';
import { FieldError } from 'react-hook-form';

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  error?: FieldError;
}
