import Image from "next/image";
import Link from "next/link";
import { styled } from "src/styles/theme";

export const Logo = styled(Image, {
  marginBottom: "$6",
});

export const BasicLogo = () => {
  return (
    <Link href="/">
      <Logo src="/assets/minimal_logo.svg" width="46" height="46" alt="Logo" />
    </Link>
  );
};
