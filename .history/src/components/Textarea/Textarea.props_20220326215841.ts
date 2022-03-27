import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
  comment?: string;
}
