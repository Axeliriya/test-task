import { TextareaHTMLAttributes, DetailedHTMLProps } from "react";
import { FieldError } from "react-hook-form";

export interface TextareaProps
  extends DetailedHTMLProps<
    <HTMLDivElement>,
    HTMLDivElement
  > {
  error?: FieldError;
}
