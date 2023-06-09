import Image from "next/image";
import NextLink from "next/link";
import { Limiter } from "src/components/Limiter";
import { styled } from "src/styles/theme";

export const Container = styled(Limiter, {
  padding: "$20 $4",

  maxWidth: "80rem",
  margin: "0 auto",

  display: "flex",
  gap: "$32",
});

export const AsideContainer = styled("div", {});

export const Aside = styled("aside", {
  background: "$red500",

  minWidth: "488px",
  minHeight: "661px",

  borderRadius: "$lg",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "$8",
  position: "sticky",
  top: "$4",
});

export const Logo = styled(Image, {
  marginTop: "$20",
});

export const DogsWrapper = styled("figure", {
  position: "relative",
  width: "100%",
  aspectRatio: 384 / 195,
});

export const Dogs = styled(Image, {});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",

  paddingTop: "$20",
  width: "100%",
  maxWidth: "488px",
});

export const Title = styled("h1", {
  fontSize: "$5xl",
  color: "$blue500",

  marginBottom: "$24",
  textAlign: "center",
});

export const FormFields = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Link = styled(NextLink, {
  fontSize: "$md",
  fontWeight: 700,
  color: "$blue500",
  textAlign: "center",

  padding: "$5",
  textDecoration: "underline",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$2",
});
