import { useContext } from "react";
import Image from "next/image";
import { buttonType } from "../../types/types";
import { Button } from "./styles";
import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { UserContext } from "../../contexts/UserContext";

export default function ButtonC({
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
  isDisabled,
}: buttonType) {
  const { isLoading } = useContext(UserContext);
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
        disabled={isLoading}
        color="black"
        bgColor="white"
        border="white"
        bold={true}
        fontSize="md"
        borderRadius="sm"
        padding="md"
        width="100%"
      >
        {isLoading ? (
          <Icon
            path={mdiLoading}
            title="Loading"
            size={1.5}
            color="rgba(0, 0, 0, .75)"
            spin={true}
          />
        ) : (
          <>
            <Image src="/google.svg" alt="Google" width={35} height={35} />{" "}
            {text}
          </>
        )}
      </Button>
    );
  }
  if (variant == "github") {
    return (
      <Button
        disabled={isLoading}
        color="black"
        bgColor="white"
        border="white"
        bold={true}
        fontSize="md"
        borderRadius="sm"
        padding="md"
        width="100%"
      >
        {isLoading ? (
          <Icon
            path={mdiLoading}
            title="Loading"
            size={1.5}
            color="rgba(0, 0, 0, .75)"
            spin={true}
          />
        ) : (
          <>
            <Image src="/github.svg" alt="GitHub" width={35} height={35} />{" "}
            {text}
          </>
        )}
      </Button>
    );
  }
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? (
        <Icon
          path={mdiLoading}
          title="Loading"
          size={1.5}
          color="rgba(88, 166, 255, 1)"
          spin={true}
        />
      ) : (
        <>
          {image}
          {text}
        </>
      )}
    </Button>
  );
}
