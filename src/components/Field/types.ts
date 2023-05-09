import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

import * as S from "./styles";

export type FieldProps = {
  label?: string;
  labelProps?: typeof S.Label.defaultProps;

  subLabel?: string;
  error?: FieldError;
  children: ReactNode;
};
