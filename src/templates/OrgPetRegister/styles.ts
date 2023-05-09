import { styled } from "src/styles/theme";

export const Container = styled("div", {
  display: "flex",
});

export const Menu = styled("aside", {
  background: "$red500",

  height: "100vh",
  width: "$menu",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "$8 $6",

  position: "fixed",
  top: 0,
  left: 0,
});

export const Content = styled("div", {
  width: "120vw",
  background: "$red200",
  overflowY: "auto",

  marginLeft: "6rem !important",
});

export const Main = styled("main", {
  padding: "$28 $4",
  maxWidth: "44rem",

  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  gap: "$8",
});
