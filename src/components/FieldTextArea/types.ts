import { FieldProps } from "../Field/types";

import * as S from "./styles";

export type FieldTextAreaProps = Omit<FieldProps, "children"> &
  typeof S.TextArea.defaultProps & {
    disabled?: boolean;
  };
