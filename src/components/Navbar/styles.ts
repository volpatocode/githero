import styled from "styled-components";

export type buttonType = {
  variant: "text" | "contained";
};

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);
  padding: 6px 8px;
  transition: 200ms ease-in-out all;
  :hover {
    color: rgba(255, 255, 255, 0.65);
  }
`;

export const Button = styled.button<buttonType>`
  cursor: pointer;
  padding: 8px 12px;
  background: none;
  color: ${(props) =>
    props.variant == "contained"
      ? "rgba(57, 211, 83, .9)"
      : " rgba(255, 255, 255, 0.95)"};
  border: ${(props) =>
    props.variant == "contained" ? "1px solid rgba(57, 211, 83, .9)" : "none"};
  border-radius: ${(props) => (props.variant == "contained" ? "15px" : "none")};
  transition: 200ms ease-in-out all;
  :hover {
    color: ${(props) =>
      props.variant == "contained"
        ? "rgba(57, 211, 83, .7)"
        : " rgba(255, 255, 255, 0.65)"};
    border: ${(props) =>
      props.variant == "contained"
        ? "1px solid rgba(57, 211, 83, .9)"
        : "none"};
  }
`;
