import Head from "next/head";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar/>
    </>
  );
}
