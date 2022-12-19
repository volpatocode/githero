import styled from "styled-components";
import { buttonType } from "../../types/types";

// text?: string;
// variant?: "google" | "github";
// bgColor?: "transparent" | "green" | "blue" | "white" | "black";
// color?: "transparent" | "green" | "blue" | "white" | "black";
// border?: "transparent" | "green" | "blue" | "white" | "black";
// fontSize?: "0.8rem" | "1rem" | "1.2rem";

export const Button = styled.button<buttonType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  width: ${(props) => props.width};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "sm":
        return ".8rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.2rem";
      case "xl":
        return "1.5rem";
    }
  }};

  font-weight: ${(props) => (props.bold == true ? "bold" : "false")};

  background-color: ${(props) => {
    switch (props.bgColor) {
      case "transparent":
        return "transparent";
      case "green":
        return "rgba(57, 211, 83, 1)";
      case "blue":
        return "rgba(88, 166, 255, 1)";
      case "white":
        return "rgba(255, 255, 255, .95)";
      case "black":
        return "rgba(0, 0, 0, .75)";
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case "transparent":
        return "transparent";
      case "green":
        return "rgba(57, 211, 83, 1)";
      case "blue":
        return "rgba(88, 166, 255, 1)";
      case "white":
        return "rgba(255, 255, 255, .95)";
      case "black":
        return "rgba(0, 0, 0, .75)";
    }
  }};

  border: ${(props) => {
    switch (props.border) {
      case "transparent":
        return "1px solid transparent";
      case "green":
        return "1px solid rgba(57, 211, 83, 1)";
      case "blue":
        return "1px solid rgba(88, 166, 255, 1)";
      case "white":
        return "1px solid rgba(255, 255, 255, .95)";
      case "black":
        return "1px solid rgba(0, 0, 0, .75)";
    }
  }};

  border-radius: ${(props) => {
    switch (props.borderRadius) {
      case "sm":
        return "5px";
      case "md":
        return "10px";
      case "lg":
        return "15px";
      case "xl":
        return "20px";
      case "full":
        return "50%";
    }
  }};

  padding: ${(props) => {
    switch (props.padding) {
      case "sm":
        return "6px 16px";
      case "md":
        return "8px 18px";
      case "lg":
        return "10px 20px";
    }
  }};

  transition: 200ms ease-in-out all;
  :hover {
    filter: brightness(90%);
  }

  :disabled {
    background: #c3c3c3;
    border: 1px solid transparent;
  }
`;
