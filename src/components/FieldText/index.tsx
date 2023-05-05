import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useState,
} from "react";

import { FieldTextProps } from "./types";

import * as S from "./styles";
import { Tooltip } from "../Tooltip";

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const { label, mask, error, disabled, ...fieldProps } = props;
  const { type } = fieldProps;

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const handleToggleShowPassword = useCallback(
    () => setShowPassword((prevState) => !prevState),
    []
  );

  const PasswordIcon = useCallback(() => {
    if (showPassword) {
      return (
        <S.HidePasswordIcon
          size={32}
          color="rgba(13, 59, 102, 0.5)"
          onClick={handleToggleShowPassword}
        />
      );
    }

    return (
      <S.ShowPasswordIcon
        size={32}
        color="rgba(13, 59, 102, 0.5)"
        onClick={handleToggleShowPassword}
      />
    );
  }, [handleToggleShowPassword, showPassword]);

  return (
    <S.Container error={Boolean(error)}>
      <S.LabelContainer>
        <S.Label>{label}</S.Label>
      </S.LabelContainer>

      <S.Field disabled={disabled}>
        {mask ? (
          <S.InputMask
            {...fieldProps}
            mask={mask}
            ref={ref as any}
            type={showPassword ? "text" : type}
          />
        ) : (
          <S.Input
            {...fieldProps}
            ref={ref}
            type={showPassword ? "text" : type}
          />
        )}

        {isPassword && <PasswordIcon />}
      </S.Field>

      {error && (
        <S.ErrorContainer>
          <S.ErrorIcon size={20} weight="fill" />
          <S.ErrorMessage>{error.message}</S.ErrorMessage>
        </S.ErrorContainer>
      )}
    </S.Container>
  );
};

export const FieldText = forwardRef(BaseFieldText);
