import * as Select from "@radix-ui/react-select";
import { styled } from "src/styles/theme";

export const Root = styled(Select.Root, {});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const Label = styled("label", {
  variants: {
    variant: {
      default: { fontSize: "$3", fontWeight: 500, color: "$white" },
      input: { fontSize: "$md", color: "$blue500", fontWeight: 600 },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Trigger = styled(Select.Trigger, {
  variants: {
    variant: {
      outline: {
        background: "transparent",
        border: "2px solid $red500",
        color: "#fff",

        "&[data-placeholder]": {
          color: "#fff",
        },
      },
      filled: {
        background: "$red600",
        color: "$white",

        "&[data-placeholder]": {
          color: "$white",
          fontWeight: "bold",
        },
      },
      filled_secondary: {
        background: "$red400",
        color: "$white",

        "&[data-placeholder]": {
          color: "$white",
          fontWeight: "bold",
        },
      },
      filled_tertiary: {
        background: "$red300",
        color: "$blue500",

        "&[data-placeholder]": {
          color: "$blue500",
          fontWeight: "bold",
        },
      },
      input: {
        width: "100%",
        height: "100% !important",

        color: "$blue500",
        borderRadius: "$md",

        background: "$gray100",
        border: "1px solid $gray200",
        padding: "$4",

        "&[data-placeholder]": {
          color: "$blue300",
          fontWeight: 500,
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
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none",
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
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  padding: "0 $4",

  gap: "5px",

  background: "$white",
  fontSize: "$sm",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "bold",

  "&[data-placeholder]": {
    color: "$blue500",
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

  color: "$blue500",
});

export const Separator = styled(Select.Separator, {
  height: "1px",
  backgroundColor: "$blue500",
  margin: "5px",
  opacity: 0.2,
});

export const ScrollDownButton = styled(Select.ScrollDownButton, {});

export const Input = styled("input", {
  all: "unset",
  padding: "$4",
  fontSize: "$sm",
});
