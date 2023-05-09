import { styled } from "src/styles/theme";

export const Container = styled("div", {
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },

  background: "$gray100",
  border: "1px solid $gray200",

  borderRadius: "$md",

  display: "flex",
});

export const TextArea = styled("textarea", {
  "&": {
    all: "unset",
  },

  width: "100%",
  height: "100%",
  padding: "$4",

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
