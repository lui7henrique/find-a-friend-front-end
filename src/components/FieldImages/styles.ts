import { File, Upload, X } from "phosphor-react";
import { styled } from "src/styles/theme";

export const Container = styled("div", {
  background: "$gray100",
  border: "1px solid $gray200",
  padding: "$12",
  borderRadius: "$md",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$4",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    background: "$gray200",
  },
});

export const UploadIcon = styled(Upload, {});

export const UploadLabel = styled("p", {
  fontSize: "$md",
  color: "$blue500",
  fontWeight: 600,
});

export const UploadInput = styled("input", {
  display: "none",
});

export const Image = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$4",
  background: "transparent",
  border: "1px solid $gray200",
  borderRadius: "$md",
});

export const ImageInfos = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const ImageIcon = styled(File, {});

export const ImageName = styled("h5", {
  fontSize: "$sm",
  color: "$blue500",
});
