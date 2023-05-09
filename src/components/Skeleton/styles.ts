import { keyframes } from "src/styles/theme";
import { styled } from "src/styles/theme";

const shine = keyframes({
  to: {
    "background-position-x": "-200%",
  },
});

export const Skeleton = styled("div", {
  variants: {
    color: {
      white: {
        background:
          "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
      },
      blue: {
        background:
          "linear-gradient(110deg, $blue400 8%, $blue300 18%, $blue400 33%)",
      },
    },
    size: {
      button: {
        width: "64px",
        height: "64px",
      },
      title: {
        width: "237px",
        height: "27px",
      },
      line: {
        width: "200px",
        height: "16px",
      },
    },
  },

  defaultVariants: {
    color: "white",
  },

  backgroundSize: "200% 100%",
  animation: `1.5s ${shine} linear infinite`,

  borderRadius: "$md",

  width: "50px",
  height: "50px",
});
