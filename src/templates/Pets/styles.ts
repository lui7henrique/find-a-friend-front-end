import Image from "next/image";
import { styled } from "src/styles/theme";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",

  display: "flex",
});

export const Aside = styled("aside", {
  width: "$aside",
  height: "100vh",

  overflowY: "auto",
  overflowX: "hidden",
  background: "$red500",
});

export const AsideHeader = styled("header", {
  background: "$red600",
  width: "$aside",

  padding: "$20 $10 $10 $10",
});

export const AsideLogo = styled(Image, {
  marginBottom: "$6",
});

export const AsideHeaderFilters = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 2fr auto",
  gap: "$3",
  justifyContent: "space-between",
  width: "100%",
});

export const AsideBody = styled("div", {
  padding: "$10",
});

export const AsideBodyTitle = styled("h2", {
  fontWeight: 800,
  fontSize: "$lg",
  marginBottom: "$6",
});

export const AsideBodyFilters = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$7",
});

export const Main = styled("main", {
  width: "calc(100vw - $aside)",
  height: "100vh",

  overflowY: "auto",
  overflowX: "hidden",

  background: "$red200",

  paddingRight: "$6",
  paddingLeft: "$6",
});

export const MainHeader = styled("header", {
  marginTop: "153px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const MainTotal = styled("h3", {
  fontSize: "$5",
  fontWeight: 500,
  color: "$tertiary",

  "& > span": {
    fontWeight: 900,
  },
});

export const MainSelectContainer = styled("div", {
  width: "210px",
});
