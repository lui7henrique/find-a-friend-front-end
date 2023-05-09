import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useState,
} from "react";

import { FieldTextProps } from "./types";

import * as S from "./styles";
import { Field } from "../Field";

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const { label, mask, error, rightElement, disabled, ...fieldProps } = props;
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
    <Field error={error} label={label}>
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
        {rightElement && rightElement}
      </S.Field>
    </Field>
  );
};

export const FieldText = forwardRef(BaseFieldText);
