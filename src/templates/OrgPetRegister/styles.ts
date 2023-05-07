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

export const Header = styled("header", {
  display: "flex",
  background: "$blue500",
  padding: "$10",
  borderRadius: "$lg",
});

export const Form = styled("div", {
  display: "flex",

  background: "$white",
  border: "1px solid $gray200",

  padding: "$16 $20",
  borderRadius: "$lg",
});
