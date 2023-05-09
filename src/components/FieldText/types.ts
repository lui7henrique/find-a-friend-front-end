import { FieldError } from "react-hook-form";
import * as S from "./styles";
import { FieldProps } from "../Field/types";

export type FieldTextProps = {
  disabled?: boolean;
  mask?: string;
} & typeof S.Input.defaultProps &
  Omit<FieldProps, "children">;
