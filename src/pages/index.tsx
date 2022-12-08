import Head from "next/head";
import GitGraph from "../components/GitGraph";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  PageWrapper,
  Content,
  MainTitle,
  MainSubtitle,
  InfoWrapper,
  TitleEmphasis,
  ButtonsBox,
  Button,
  SectionTitle,
  EventsWrapper,
  Section,
} from "../styles/homestyles";
import CardEvent from "../components/CardEvent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="/crown.svg"></link>
      </Head>
      <PageWrapper>
        <Navbar />
        <Content>
          <InfoWrapper>
            <MainTitle>
              <TitleEmphasis>Gamify</TitleEmphasis> the way you study.
              <TitleEmphasis> Study</TitleEmphasis> the way you gamify.
            </MainTitle>
            <MainSubtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nostrum harum quo quaerat mollitia. Optio ullam necessitatibus
              porro repellat cumque, dolorem ad sint.
            </MainSubtitle>
            <ButtonsBox>
              <Button variant="text">About</Button>
              <Button variant="contained">Start now!</Button>
            </ButtonsBox>
          </InfoWrapper>
          <Section>
            <SectionTitle>Active Events</SectionTitle>
            <EventsWrapper>
              <CardEvent/>
              <CardEvent/>
              <CardEvent/>
              <CardEvent/>
              <CardEvent/>

            </EventsWrapper>
          </Section>
        </Content>
        <Footer />
      </PageWrapper>
    </>
  );
}
