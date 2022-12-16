import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  padding: 0 5%;
`;

export const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 8px 0;
`;

export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Quote = styled.h1`
  font-size: 2.5rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.95);
  font-weight: normal;
  text-align: start;
  text-shadow: 
      -1px -1px 1px #111, 
      2px 2px 1px #363636;
  
`;

export const Author = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-weight: normal;
  font-size: 1.4rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FormWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  @media (max-width: 1280px) {
    padding: 0 10%;
    width: 70%;
  }
  @media (max-width: 640px) {
    padding: 0 5%;
    width: 100%;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
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
