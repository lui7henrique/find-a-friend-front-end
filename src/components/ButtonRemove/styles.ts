import { X } from "phosphor-react";
import { styled } from "src/styles/theme";

export const RemoveIconContainer = styled("div", {
  border: "2px solid $red500",
  borderRadius: "4px",
  cursor: "pointer",

  width: "18px",
  height: "18px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RemoveIcon = styled(X, {});
