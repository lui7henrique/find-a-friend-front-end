import { FieldError } from "react-hook-form";
import * as S from "./styles";

export type FieldTextProps = {
  label: string;
  disabled?: boolean;
  mask?: string;
  error?: FieldError;
} & typeof S.Input.defaultProps;
