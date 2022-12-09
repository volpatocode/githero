import styled from "styled-components";
import { buttonType } from "../../types/types";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: sticky;
  top: 0;
  background: rgba(13, 17, 23, 1);
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
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
