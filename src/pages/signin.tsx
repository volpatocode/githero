import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Content,
  PageWrapper,
  Header,
  Title,
  Subtitle,
  InputsBox,
  InputWrapper,
  Input,
  ButtonsBox,
  Anchor,
  Divider,
} from "../styles/signinstyles";
import Button from "../components/Button";
import Image from "next/image";

export default function createaccount() {
  return (
    <PageWrapper>
      <Navbar />
      <Content>
        <Header>
          <Title>Sign in to your account</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, alias.{" "}
          </Subtitle>
        </Header>

        <InputsBox>
          <InputWrapper>
            <Input placeholder="Email" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Password" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Confirm Password" />
          </InputWrapper>
        </InputsBox>

        <ButtonsBox>
          <Button
            text="Sign in"
            color="black"
            bgColor="green"
            border="green"
            bold={true}
            fontSize="md"
            borderRadius="sm"
            padding="md"
            width="100%"
            image={
              <Image width={25} height={30} alt="logo" src="/crownBlack.svg" />
            }
          />
          <Divider />
          <Button variant="google" />
          <Button variant="github" />
          <Subtitle>
            Don&apos;t have an account? <Anchor href="/signup">Sign up</Anchor>
          </Subtitle>
        </ButtonsBox>
      </Content>
      <Footer />
    </PageWrapper>
  );
}
