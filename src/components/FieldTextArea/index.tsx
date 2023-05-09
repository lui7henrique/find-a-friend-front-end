import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useState,
} from "react";

import * as S from "./styles";
import { Field } from "../Field";
import { FieldTextAreaProps } from "./types";

const BaseFieldTextArea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  FieldTextAreaProps
> = (props, ref) => {
  const { label, error, maxLength, disabled, ...fieldProps } = props;

  const fieldSubLabel = maxLength
    ? `Máximo de ${maxLength} caracteres`
    : undefined;

  return (
    <Field error={error} label={label} subLabel={fieldSubLabel}>
      <S.Container disabled={disabled}>
        <S.TextArea {...fieldProps} ref={ref} />
      </S.Container>
    </Field>
  );
};

export const FieldTextArea = forwardRef(BaseFieldTextArea);
