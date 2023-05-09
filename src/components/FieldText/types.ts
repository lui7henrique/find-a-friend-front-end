import { FieldError } from "react-hook-form";
import * as S from "./styles";
import { FieldProps } from "../Field/types";
import { ReactNode } from "react";

export type FieldTextProps = {
  disabled?: boolean;
  mask?: string;
  rightElement?: ReactNode;
} & typeof S.Input.defaultProps &
  Omit<FieldProps, "children">;
