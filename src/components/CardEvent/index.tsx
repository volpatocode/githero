import Avatar from "../Avatar";
import {
  CardEvent,
  Title,
  Description,
  Participants,
  Footer,
  Date,
  Button,
} from "./styles";

export default function index() {
  return (
    <CardEvent>
      <Title>God Team Test</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos modi
        id quasi non quibusdam esse harum.
      </Description>
      <Participants>
        <Avatar img="/test.jpg" href="/" />
        <Avatar img="/test.jpg" href="/" />
        <Avatar img="/test.jpg" href="/" />
        <Avatar img="/test.jpg" href="/" />
      </Participants>
      <Footer>
        <Date haveStarted={false}>Start in: 15hrs</Date>
        <Button>Details</Button>
      </Footer>
    </CardEvent>
  );
}
