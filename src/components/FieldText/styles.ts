import { Eye, EyeSlash, WarningCircle } from "phosphor-react";
import { styled } from "src/styles/theme";
import ReactInputMask from "react-input-mask";

export const Container = styled("div", {
  variants: {
    error: {
      true: {
        "& > div": {
          border: "1px solid $red500",
        },

        "& label": {
          color: "$red500",
        },

        "& input::placeholder, & input": {
          color: "$red500",
        },
      },
    },
  },

  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const LabelContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Label = styled("label", {
  fontSize: "$md",
  color: "$blue500",
  fontWeight: 600,
});

export const ErrorIcon = styled(WarningCircle, {
  color: "$red500",
});

export const Field = styled("div", {
  variants: {
    disabled: {
      true: {
        opacity: 0.5,

        "& input": {
          cursor: "not-allowed",
        },
      },
    },
  },

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

  /* Chrome, Safari, Edge, Opera */
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  /* Firefox */
  "input[type=number]": {
    "-moz-appearance": "textfield",
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

export const InputMask = styled(ReactInputMask, {
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

export const ErrorContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

export const ErrorMessage = styled("sup", {
  color: "$red500",
});
