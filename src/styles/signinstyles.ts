import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 15%;
  @media (max-width: 1280px) {
    padding: 0 10%;
  }
  @media (max-width: 640px) {
    padding: 0 5%;
  }
  @media (max-width: 400px) {
    padding: 0 3%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.95);
  text-align: start;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.65);
  text-align: start;
`;

export const InputsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  border-bottom: 1px solid rgba(57, 211, 83, 1);
  outline: none;
  color: rgba(255, 255, 255, 0.85);
  caret-color: rgba(255, 255, 255, 0.65);
  padding: 0.3rem 0;
  ::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 5px;
  background-color: #21262d;
  margin: 1rem 0;
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: rgba(57, 211, 83, 1);
  :hover {
    text-decoration: underline;
  }
`;
