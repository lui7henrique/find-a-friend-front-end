import * as S from "./styles";

export type FieldTextProps = {
  label: string;
  disabled?: boolean;
} & typeof S.Input.defaultProps;
