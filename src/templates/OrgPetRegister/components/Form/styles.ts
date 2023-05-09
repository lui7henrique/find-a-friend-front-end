import { Plus } from "phosphor-react";
import { styled } from "src/styles/theme";

export const Form = styled("form", {
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
  marginBottom: "$4",
});

export const FormFields = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginBottom: "$10",
});

export const FormAddMoreButton = styled("button", {
  "&": {
    all: "unset",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "1px dashed $red500",
  background: "$red500_010",

  padding: "$6",
  borderRadius: "$md",
  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    background: "$red500_030",
  },
});

export const FormAddMoreButtonIcon = styled(Plus, {});
