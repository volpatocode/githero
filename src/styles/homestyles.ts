import styled from "styled-components";
import { buttonType } from "../../types/types";

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 15%;
  @media (max-width: 1000px) {
    padding: 0.5rem 10%;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 5%;
  }
  @media (max-width: 400px) {
    padding: 0.5rem 3%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.95);
`;

export const TitleEmphasis = styled.span`
  font-size: 3.5rem;
  background: -webkit-linear-gradient(
    rgba(57, 211, 83, 1),
    rgba(57, 211, 83, 0.5)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MainSubtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.2rem;
  width: 70%;
  margin: 0 auto;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<buttonType>`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 12px 24px;
  background: none;
  color: ${(props) =>
    props.variant == "contained"
      ? "rgba(57, 211, 83, .9)"
      : " rgba(255, 255, 255, 0.95)"};
  border: ${(props) =>
    props.variant == "contained" ? "1px solid rgba(57, 211, 83, .9)" : "1px solid rgba(255, 255, 255, 0.95)"};
  border-radius: 25px;
  transition: 200ms ease-in-out all;
  :hover {
    color: ${(props) =>
      props.variant == "contained"
        ? "rgba(57, 211, 83, .7)"
        : " rgba(255, 255, 255, 0.65)"};
  }
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: .5px;
  color: rgba(255, 255, 255, 0.95);

`;

export const EventsWrapper = styled.div`
  
`;