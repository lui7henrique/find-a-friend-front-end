import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
} & typeof S.Container.defaultProps;
