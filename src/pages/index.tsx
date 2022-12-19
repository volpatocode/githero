import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { mdiChevronRight } from "@mdi/js";

import {
  PageWrapper,
  Content,
  MainTitle,
  MainSubtitle,
  InfoWrapper,
  TitleEmphasis,
  AnchorBox,
  Anchor,
  SectionTitle,
  EventsWrapper,
  Section,
  ShowMore,
} from "../styles/homestyles";
import CardEvent from "../components/CardEvent";
import Icon from "@mdi/react";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar anchors={true} />
      <Content>
        <InfoWrapper>
          <MainTitle>
            <TitleEmphasis>Gamify</TitleEmphasis> the way you study.
            <TitleEmphasis> Study</TitleEmphasis> the way you gamify.
          </MainTitle>
          <MainSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nostrum harum quo quaerat mollitia. Optio ullam necessitatibus porro
            repellat cumque, dolorem ad sint.
          </MainSubtitle>
          <AnchorBox>
            <Anchor variant="text" href="#about">About</Anchor>
            <Anchor variant="contained" href="/event/create">Create Event!</Anchor>
          </AnchorBox>
        </InfoWrapper>
        <Section>
          <SectionTitle>
            Active Events
            <ShowMore href="/events">
              Show more
              <Icon path={mdiChevronRight} title="Arrow Right" size={1} />
            </ShowMore>
          </SectionTitle>
          <EventsWrapper>
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </EventsWrapper>
        </Section>
      </Content>
      <Footer />
    </PageWrapper>
  );
}
