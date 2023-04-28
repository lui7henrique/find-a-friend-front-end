import { keyframes, styled } from "src/styles/theme";
import NextImage from "next/image";

const placeholderShimmer = keyframes({
  "0%": {
    backgroundPosition: "-40rem 0",
  },
  "100%": {
    backgroundPosition: "40rem 0",
  },
});

export const Card = styled("div", {
  width: "100%",
  background: "$white",
  borderRadius: "$lg",
  padding: "4px",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
});

export const ImageContainer = styled("figure", {
  width: "100%",
  aspectRatio: 2,
  borderRadius: "$lg",
  overflow: "hidden",
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",

  background: "#f0f0f0",
  backgroundImage:
    "linear-gradient(to right, #e4e4e4 0%, #ebebeb 20%,#e4e4e4 40%,#e4e4e4 100%)",
  backgroundSize: "80rem 14rem",
  animation: `${placeholderShimmer} 1s linear infinite forwards`,
});

export const Image = styled(NextImage, {
  objectFit: "cover",
});

export const Body = styled("div", {
  width: "100%",

  paddingBottom: "$3",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  marginTop: "-24px",
});

export const Name = styled("h5", {
  color: "$blue500",

  fontSize: "$lg",
  fontWeight: 700,

  marginTop: "$4",
  transition: "all 0.2s ease-in-out",
});

export const IconContainer = styled("span", {
  variants: {
    type: {
      CAT: {
        background: "$yellow500",
      },
      DOG: {
        background: "$red500",
      }
    }
  },

  border: "3px solid $white",
  borderRadius: "10px",

  background: "$yellow500",

  width: "44px",
  height: "44px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  zIndex: 2,
  transition: "all 0.2s ease-in-out",
});
