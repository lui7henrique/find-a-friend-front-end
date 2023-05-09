import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily: "Nunito, sans-serif",
    scrollBehavior: "smooth",
  },

  ".not-scrollable": {
    overflow: "hidden",
  },

  "h1, h2, h3, h4, h5, h6": {
    color: "white",
  },

  a: {
    textDecoration: "none",
    color: "$white",
  },

  "p, sup, sub": {
    color: "$white",
  },
});
