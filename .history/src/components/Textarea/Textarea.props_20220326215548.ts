import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface TextareaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
}
