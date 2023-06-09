import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
} & typeof S.Container.defaultProps;
