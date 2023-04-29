import Image from "next/image";
import { styled } from "src/styles/theme";

export const HomeContainer = styled("div", {
  background: "$red500",
  width: "100vw",
  height: "100vh",

  padding: "$24",
});

export const HomeContent = styled("main", {
  maxWidth: "80rem",
  margin: "0 auto",
});

export const HomeLogo = styled(Image, {
  marginBottom: "$3",
});

export const HomeHero = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const HomeTitle = styled("h1", {
  fontWeight: 800,
  fontSize: "$7xl",
  lineHeight: "90%",
});

export const HomeDogsWrapper = styled("figure", {
  position: "relative",
  aspectRatio: 592 / 305,
});

export const HomeDogs = styled(Image, {});

export const HomeFooter = styled("footer", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-start",

  marginTop: "$24",
});

export const HomeFooterTexts = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const HomeSubtitle = styled("h2", {
  fontSize: "$2xl",
  fontWeight: 600,
});

export const HomeSupport = styled("sup", {
  color: "#ffffff8c",

  a: {
    color: "#ffffff8c",
  },
});

export const HomeSearch = styled("form", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const Label = styled("sup", {
  fontSize: "$lg",
  marginRight: "$4",
});

export const Selects = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gap: "$4",

  width: "50%",
  marginRight: "$4",
});
