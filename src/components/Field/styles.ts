import { WarningCircle } from "phosphor-react";
import { styled } from "src/styles/theme";

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
  gap: "$4",
});

export const Label = styled("label", {
  fontSize: "$md",
  color: "$blue500",
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
