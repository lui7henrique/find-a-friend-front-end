import { FieldProps } from "./types";

import * as S from "./styles";

export const Field = (props: FieldProps) => {
  const { label, labelProps, subLabel, error, children } = props;

  return (
    <S.Container error={Boolean(error)}>
      {label && (
        <S.LabelContainer>
          <S.Label {...labelProps}>{label}</S.Label>
          {subLabel && <S.SubLabel>{subLabel}</S.SubLabel>}
        </S.LabelContainer>
      )}

      {children}

      {error && (
        <S.ErrorContainer>
          <S.ErrorIcon size={20} weight="fill" />
          <S.ErrorMessage>{error.message}</S.ErrorMessage>
        </S.ErrorContainer>
      )}
    </S.Container>
  );
};
