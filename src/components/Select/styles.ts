import * as Select from "@radix-ui/react-select";
import { styled } from "src/styles/theme";

export const Root = styled(Select.Root, {});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const Label = styled("label", {
  fontSize: "$3",
  fontWeight: 500,
  color: "$white",
});

export const Trigger = styled(Select.Trigger, {
  variants: {
    variant: {
      outline: {
        background: "transparent",
        border: "2px solid $primary",
        color: "#fff",

        "&[data-placeholder]": {
          color: "#fff",
        },
      },
      filled: {
        background: "$primary_dark",
        color: "$white",

        "&[data-placeholder]": {
          color: "$white",
          fontWeight: "bold",
        },
      },
      filled_secondary: {
        background: "$primary_light",
        color: "$white",

        "&[data-placeholder]": {
          color: "$white",
          fontWeight: "bold",
        },
      },
    },
    size: {
      small: {
        height: "60px",
        padding: "$4",
      },
      medium: {
        height: "72px",
      },
    },
  },

  defaultVariants: {
    variant: "filled",
    size: "medium",
  },

  borderRadius: "$lg",
  border: "none",
  outline: "none",

  display: "inline-flex",
  width: "100%",
  alignItems: "center",

  padding: "0 $4",

  gap: "5px",

  background: "$white",
  fontSize: "$sm",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "bold",

  "&[data-placeholder]": {
    color: "$tertiary",
  },
});

export const Value = styled(Select.Value, {});

export const Icon = styled(Select.Icon, {});

export const Portal = styled(Select.Portal, {});

export const Content = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "$white",
  borderRadius: "$md",
  boxShadow:
    " 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const ScrollUpButton = styled(Select.ScrollUpButton, {});

export const ViewPort = styled(Select.Viewport, {
  padding: "5px",
});

export const Group = styled(Select.Group, {});

export const GroupLabel = styled(Select.Label, {
  padding: "0 8px",
  fontSize: "12px",
  fontWeight: 800,
  lineHeight: "25px",

  color: "$tertiary",
});

export const Separator = styled(Select.Separator, {
  height: "1px",
  backgroundColor: "$tertiary",
  margin: "5px",
  opacity: 0.2,
});

export const ScrollDownButton = styled(Select.ScrollDownButton, {});

export const Input = styled("input", {
  all: "unset",
  padding: "$4",
  fontSize: "$sm",
});
