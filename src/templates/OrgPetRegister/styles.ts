import { styled } from "src/styles/theme";

export const Container = styled("div", {
  display: "flex",

  height: "100vh",
  width: "100vw",
});

export const Menu = styled("aside", {
  background: "$red500",

  height: "100%",
  width: "$menu",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "$8 $6",
});

export const Content = styled("div", {
  width: "calc(100vw - $menu)",
  background: "$red200",
});

export const Main = styled("main", {
  padding: "$28 $4",
  maxWidth: "44rem",

  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  gap: "$8",
});
