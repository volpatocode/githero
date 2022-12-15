import Image from "next/image";
import { buttonType } from "../../types/types";
import { Button } from "./styles";

export default function index({
  variant,
  text,
  bgColor,
  bold,
  border,
  borderRadius,
  color,
  fontSize,
  padding,
  width,
  image,
}: buttonType) {
  const props = {
    variant,
    text,
    bgColor,
    bold,
    border,
    borderRadius,
    color,
    fontSize,
    padding,
    width,
  };

  if (variant == "google") {
    return (
      <Button
        color="black"
        bgColor="white"
        border="white"
        bold={true}
        fontSize="md"
        borderRadius="sm"
        padding="md"
        width="100%"
      >
        <Image src="/google.svg" alt="Google" width={35} height={35} /> Sign in
        with Google
      </Button>
    );
  }
  if (variant == "github") {
    return (
      <Button
        color="black"
        bgColor="white"
        border="white"
        bold={true}
        fontSize="md"
        borderRadius="sm"
        padding="md"
        width="100%"
      >
        <Image src="/github.svg" alt="GitHub" width={35} height={35} /> Sign in
        with GitHub
      </Button>
    );
  }
  return (
    <Button {...props}>
      {image}
      {text}
    </Button>
  );
}
