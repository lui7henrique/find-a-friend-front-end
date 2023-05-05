import { styled } from "src/styles/theme";

export const Container = styled("button", {
  "&": {
    all: "unset",
  },

  variants: {
    variant: {
      primary: {
        background: "$blue500",
        color: "$white",
      },
      secondary: {
        background: "$gray100",
        color: "$blue500",
      },
    },
    disabled: {
      true: {
        pointerEvents: "none",
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },

  padding: "$5",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$lg",
  fontWeight: 700,
  fontSize: "$md",

  cursor: "pointer",
});
