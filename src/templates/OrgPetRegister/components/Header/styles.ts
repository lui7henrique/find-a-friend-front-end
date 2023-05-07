import { Dog, SignOut } from "phosphor-react";
import { styled } from "src/styles/theme";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",

  background: "$blue500",
  padding: "$10",
  borderRadius: "$lg",
});

export const HeaderOrg = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
});

export const HeaderIconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$yellow600",

  borderRadius: "$lg",

  width: "64px",
  height: "64px",
});

export const HeaderIcon = styled(Dog, {});

export const HeaderOrgInfos = styled("div", {});

export const HeaderOrgTitle = styled("h1", {});

export const HeaderOrgAddress = styled("p", {});

export const HeaderLogoutIconContainer = styled("button", {
  "&": {
    all: "unset",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$blue200",

  width: "64px",
  height: "64px",

  borderRadius: "$lg",
  cursor: "pointer",
});

export const HeaderLogoutIcon = styled(SignOut, {});
