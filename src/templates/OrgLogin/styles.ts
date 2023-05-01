import Image from "next/image";
import { Limiter } from "src/components/Limiter";
import { styled } from "src/styles/theme";

export const Container = styled(Limiter, {
  padding: "$20 $4",

  maxWidth: "80rem",
  margin: "0 auto",

  display: "flex",
  gap: "$32",
});

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

export const Form = styled("div", {
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
});

export const FormFields = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
