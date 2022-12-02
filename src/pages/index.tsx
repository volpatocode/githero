import Head from "next/head";
import GitGraph from "../components/GitGraph";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar/>
      <GitGraph/>
    </>
  );
}
