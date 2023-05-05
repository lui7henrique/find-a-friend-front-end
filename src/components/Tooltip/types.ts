import { ReactNode } from "react";
import * as S from "./styles";

export type TooltipProps = {
  children: ReactNode;
  message?: string;
} & typeof S.Content.defaultProps;
