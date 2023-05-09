import { theme } from "src/styles/theme";
import * as S from "./styles";

type ButtonRemoveProps = typeof S.RemoveIconContainer.defaultProps;

export const ButtonRemove = (props: ButtonRemoveProps) => {
  const {
    colors: {
      red500: { value },
    },
  } = theme;

  return (
    <S.RemoveIconContainer {...props}>
      <S.RemoveIcon size={16} weight="bold" color={value} />
    </S.RemoveIconContainer>
  );
};
