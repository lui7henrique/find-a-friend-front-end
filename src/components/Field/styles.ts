import { WarningCircle } from "phosphor-react";
import { styled } from "src/styles/theme";

export const Container = styled("div", {
  variants: {
    error: {
      true: {
        textarea: {
          border: "1px solid $red500",
          borderRadius: "$md",

          "&::placeholder": {
            color: "$red500",
          },
        },

        "div:has(input)": {
          border: "1px solid $red500",
          borderRadius: "$md",

          "&::placeholder": {
            color: "$red500",
          },
        },

        button: {
          border: "1px solid $red500",

          "&[data-placeholder]": {
            color: "$red500",
          },
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
  gap: "$4",
});

export const Label = styled("label", {
  variants: {
    color: {
      white: {
        color: "$white",
      },
      blue: {
        color: "$blue500",
      },
    },
  },

  defaultVariants: {
    color: "blue",
  },

  fontSize: "$sm",
  fontWeight: 600,
});

export const SubLabel = styled("sup", {
  fontSize: "$sm",
  color: "$gray300",
});

export const ErrorContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

export const ErrorMessage = styled("sup", {
  color: "$red500",
});

export const ErrorIcon = styled(WarningCircle, {
  color: "$red500",
});
