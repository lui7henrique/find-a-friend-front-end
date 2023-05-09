import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export type FieldProps = {
  label?: string;
  subLabel?: string;
  error?: FieldError;
  children: ReactNode;
};
