import Link from "next/link";
import { Avatar } from "./styles";

type avatarType = {
    img:string;
    href: string;
}

export default function index({img, href}:avatarType) {
  return (
    <Link href={href}>
      <Avatar src={img}/>
    </Link>
  );
}
