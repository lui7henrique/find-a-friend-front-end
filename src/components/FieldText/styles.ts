import { Eye, EyeSlash } from "phosphor-react";
import { styled } from "src/styles/theme";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const Label = styled("label", {
  fontSize: "$md",
  color: "$blue500",
  fontWeight: 600,
});

export const Field = styled("div", {
  background: "$gray100",
  border: "1px solid $gray200",
  padding: "$4",
  borderRadius: "$md",

  display: "flex",

  "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
    {
      "-webkit-box-shadow": "0 0 0 30px #F5F8FA inset !important",
      "-webkit-text-fill-color": "#0D3B66",
    },
});

export const Input = styled("input", {
  "&": {
    all: "unset",
  },

  width: "100%",
  height: "100%",

  background: "$gray100 !important",
  color: "$blue500",

  "&::placeholder": {
    color: "$blue500",
    opacity: 0.5,
  },

  "&::-ms-reveal, &::-ms-clear": {
    display: "none",
  },
});

export const ShowPasswordIcon = styled(Eye, {
  cursor: "pointer",
});

export const HidePasswordIcon = styled(EyeSlash, {
  cursor: "pointer",
});
