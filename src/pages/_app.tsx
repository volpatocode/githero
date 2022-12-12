import type { AppProps } from "next/app";
import Head from "next/head";
import { UserContextProvider } from "../contexts/UserContext";
import { UtilsContextProvider } from "../contexts/UtilsContext";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GitHero</title>
        <link rel="icon" type="image/x-icon" href="/crown.svg" />
      </Head>
      <GlobalStyle />
      <UtilsContextProvider>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </UtilsContextProvider>
    </>
  );
}
