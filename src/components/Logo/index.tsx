import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <Link
      style={{
        display: "flex",
        flexDirection: "row",
        gap: ".2rem",
        color: "rgba(57, 211, 83, .9)",
        alignItems: "center",
        background: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
      }}
      href="/"
    >
      <Image width={25} height={30} alt="logo" src="/crownGreen.svg" />
      githero
    </Link>
  );
}
