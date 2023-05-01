import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { children, ...containerProps } = props;

  return <S.Container {...containerProps}>{children}</S.Container>;
};
