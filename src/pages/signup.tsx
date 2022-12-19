import {
  PageWrapper,
  FormWrapper,
  FormHeader,
  Title,
  Subtitle,
  InputsBox,
  InputWrapper,
  Input,
  ButtonsBox,
  Anchor,
  Divider,
  ContentWrapper,
  ContentHeader,
  Quote,
  Author,
  Socials,
  ContentFooter,
  Form,
} from "../styles/signupstyles";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { mdiInstagram, mdiFacebook, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import useWindowSize from "../hooks/useWindowSize";
import { UserContext } from "../contexts/UserContext";
import { signUpValidationSchema } from "../utils/validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "../components/InputError";

type quoteType = [{ author: string; quote: string; category: string }];

export default function SignUp() {
  const { signUpUser, errorFirebase } = useContext(UserContext);
  const [quotes, setQuotes] = useState<quoteType>();
  const { width } = useWindowSize();

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, {
      headers: { "X-Api-Key": `${process.env.NEXT_PUBLIC_NINJAS_API_KEY}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        console.log(quotes);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  return quotes?.map((quote) => {
    return (
      <PageWrapper key={quote?.quote}>
        {width > 1280 && (
          <ContentWrapper>
            <ContentHeader>
              <Link href="/">
                <Image
                  width={40}
                  height={45}
                  alt="logo"
                  src="/crownWhite.svg"
                />
              </Link>
            </ContentHeader>
            <Quote>&quot;{quote?.quote}&quot;</Quote>
            <ContentFooter>
              <Author>{quote?.author}</Author>
              <Socials>
                <Link href="/">
                  <Icon
                    path={mdiInstagram}
                    title="Instagram"
                    size={1.2}
                    color="rgba(255, 255, 255, 0.95)"
                  />
                </Link>
                <Link href="/">
                  <Icon
                    path={mdiFacebook}
                    title="Facebook"
                    size={1.2}
                    color="rgba(255, 255, 255, 0.95)"
                  />
                </Link>
                <Link href="/">
                  <Icon
                    path={mdiGithub}
                    title="Github"
                    size={1.2}
                    color="rgba(255, 255, 255, 0.95)"
                  />
                </Link>
              </Socials>
            </ContentFooter>
          </ContentWrapper>
        )}
        <FormWrapper>
          <FormHeader>
            <Title>Sign up to your account</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, alias.{" "}
            </Subtitle>
          </FormHeader>
          <Form onSubmit={handleSubmit(signUpUser)}>
            <InputsBox>
              <InputWrapper>
                <Input
                  {...register("email")}
                  id="signUp-email"
                  type="email"
                  placeholder="Email"
                  formNoValidate={true}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  {...register("password")}
                  id="signUp-password"
                  type="password"
                  placeholder="Password"
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  {...register("confirmPassword")}
                  id="signUp-confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </InputWrapper>
            </InputsBox>
            <ButtonsBox>
              {errorFirebase && <InputError error={errorFirebase} />}
              <Button
                onClick={handleSubmit(signUpUser)}
                text="Sign up"
                color="black"
                bgColor="green"
                border="green"
                bold={true}
                fontSize="md"
                borderRadius="sm"
                padding="md"
                width="100%"
                image={
                  <Image
                    width={25}
                    height={30}
                    alt="logo"
                    src="/crownBlack.svg"
                  />
                }
              />
              <Divider />
              <Button variant="google" text="Sign up with Google" />
              <Button variant="github" text="Sign up with Github" />
              <Subtitle>
                Already have an account? <Anchor href="/signin">Sign in</Anchor>
              </Subtitle>
            </ButtonsBox>
          </Form>
        </FormWrapper>
      </PageWrapper>
    );
  });
}
