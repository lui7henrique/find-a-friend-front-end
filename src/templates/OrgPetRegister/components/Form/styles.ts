import { styled } from "src/styles/theme";

export const Form = styled("div", {
  display: "flex",
  flexDirection: "column",

  background: "$white",
  border: "1px solid $gray200",

  padding: "$16 $20",
  borderRadius: "$lg",
});

export const FormTitle = styled("h2", {
  color: "$blue500",
  marginBottom: "$5",

  fontSize: "$4xl",
  fontWeight: 800,
});

export const FormDivider = styled("div", {
  borderBottom: "1px solid $gray200",
  width: "100%",
});
