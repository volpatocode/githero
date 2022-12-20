import Icon from "@mdi/react";
import Link from "next/link";
import { mdiAccountCircle } from "@mdi/js";
import { Avatar } from "./styles";

type avatarType = {
  img: string;
  href: string;
  size?: number;
};

export default function index({ img, href, size }: avatarType) {
  return (
    <Link
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      href={"/" || href}
    >
      {img ? (
        <Avatar src={img} />
      ) : (
        <Icon
          path={mdiAccountCircle}
          title="account-circle"
          size={size || 1.5}
          color="rgba(255, 255, 255, 0.95)"
        />
      )}
    </Link>
  );
}
