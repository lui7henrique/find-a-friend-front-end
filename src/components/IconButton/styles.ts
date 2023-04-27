import Link from "next/link";
import { styled } from "src/styles/theme";

const styles = {
  variants: {
    color: {
      yellow: {
        background: "$secondary",
      },
    },
    variant: {
      unstyled: {
        background: "transparent",
        padding: 0,
      },
    },
    disabled: {
      true: {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
    size: {
      small: { width: "60px", height: "60px" },
      medium: { width: "72px", height: "72px" },
    },
  },

  defaultVariants: {
    color: "yellow",
    size: "medium",
  },

  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  borderRadius: "$lg",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.8)",
  },
};

export const LinkContainer = styled(Link, styles);

export const Container = styled("button", styles);
