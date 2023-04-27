import * as Select from "@radix-ui/react-select";
import { styled } from "src/styles/theme";

export const Item = styled(Select.Item, {
  fontSize: "13px",
  lineHeight: 1,
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "red",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$tertiary",

    "& > span": { color: "$white" },
  },

  "> span": {
    color: "$tertiary",
  },
});

export const ItemText = styled(Select.ItemText, {
  color: "red",
  border: "1px solid red !important",
});

export const ItemIndicator = styled(Select.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: "25px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
