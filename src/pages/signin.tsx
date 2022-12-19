import {
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
  Form,
} from "../styles/signinstyles";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInValidationSchema } from "../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import InputError from "../components/InputError";

export default function SignIn() {
  const { signInUser, errorFirebase } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  return (
    <PageWrapper>
      <Header>
        <Link href="/">
          <Image width={35} height={40} alt="logo" src="/crownGreen.svg" />
        </Link>
        <Title>Sign in to your account</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, alias.
        </Subtitle>
      </Header>
      <Form onSubmit={handleSubmit(signInUser)}>
        <InputsBox>
          <InputWrapper>
            <Input
              {...register("email")}
              id="signIn-email"
              type="email"
              placeholder="Email"
              formNoValidate={true}
            />
            {formErrors?.email && (
              <InputError error={formErrors?.email?.message} />
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              {...register("password")}
              id="signIn-password"
              type="password"
              placeholder="Password"
            />
            {formErrors?.password && (
              <InputError error={formErrors?.password?.message} />
            )}
          </InputWrapper>
        </InputsBox>
        <ButtonsBox>
          {errorFirebase && <InputError error={errorFirebase} />}
          <Button
            type="submit"
            onClick={handleSubmit(signInUser)}
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
          <Button variant="google" text="Sign in with Google" />
          <Button variant="github" text="Sign in with GitHub" />
          <Subtitle>
            Don&apos;t have an account? <Anchor href="/signup">Sign up</Anchor>
          </Subtitle>
        </ButtonsBox>
      </Form>
    </PageWrapper>
  );
}
