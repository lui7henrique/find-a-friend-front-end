import { styled } from "src/styles/theme";

export const Container = styled("div", {
  display: "flex",

  width: "100vw",
  height: "100vh",
  overflow: "hidden",

  body: {
    overflow: "hidden",
  },
});

export const Menu = styled("aside", {
  background: "$red500",

  height: "100vh",
  width: "$menu",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "$8 $6",
});

export const Content = styled("div", {
  width: "100%",
  background: "$red200",
  overflowY: "auto",
});

export const Main = styled("main", {
  padding: "$28 $4",
  maxWidth: "44rem",

  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  gap: "$8",
});
