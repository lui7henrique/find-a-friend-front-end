import * as S from "./styles";
import { ButtonProps } from "./types";

type Variant = "primary" | "secondary";

export const Button = (props: ButtonProps) => {
  const { children, loading, ...containerProps } = props;

  const spinnerColorByVariant: Record<Variant, string> = {
    primary: "#fff",
    secondary: "#0D3B66",
  };

  const spinnerColor =
    spinnerColorByVariant[(containerProps.variant as Variant) ?? "primary"];

  return (
    <S.Container
      {...containerProps}
      disabled={loading ?? containerProps.disabled}
    >
      {loading ? <S.Spinner color={spinnerColor} size={24} /> : children}
    </S.Container>
  );
};
