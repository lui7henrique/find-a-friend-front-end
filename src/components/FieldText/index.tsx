import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useState,
} from "react";

import { FieldTextProps } from "./types";

import * as S from "./styles";

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const { label, ...fieldProps } = props;

  const { type } = fieldProps;
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
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Field>
        <S.Input
          {...fieldProps}
          ref={ref}
          type={showPassword ? "text" : type}
        />
        {isPassword && <PasswordIcon />}
      </S.Field>
    </S.Container>
  );
};

export const FieldText = forwardRef(BaseFieldText);
