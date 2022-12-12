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
  flex-direction: column;
  gap: 2rem;
`;
