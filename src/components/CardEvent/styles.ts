import styled from "styled-components";

export type dateType = {
  haveStarted: boolean;
};

export const CardEvent = styled.div`
  border: 1px solid #21262d;
  border-radius: 5px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const Title = styled.h3`
  color: rgba(88, 166, 255, 1);
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.65);
  text-align: justify;
  word-break: break-all;
`;

export const Participants = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.p<dateType>`
  color: ${(props) =>
    props.haveStarted ? "#da3633" : "rgba(57, 211, 83, 0.9)"};
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  background: none;
  color: rgba(88, 166, 255, 1);
  border: 1px solid rgba(88, 166, 255, 1);
  border-radius: 25px;
  transition: 200ms ease-in-out all;
  :hover {
    color: rgba(88, 166, 255, 0.7);
  }
`;
