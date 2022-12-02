import styled from "styled-components";

type graphType = {
  value: any;
  onClick?: any;
};

export const GitGraph = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const Cell = styled.button<graphType>`
  transition: 200ms ease-in-out all;
  background: ${(props) => {
    switch (props.value) {
      case 0:
        return "rgba(0, 0, 0, .3)";
      case 1:
        return "rgba(57, 211, 83, 1)";
      case 2:
        return "rgba(57, 211, 83, .8)";
      case 3:
        return "rgba(57, 211, 83, .5)";
      case 4:
        return "rgba(57, 211, 83, .2)";
    }
  }};
  width: 16px;
  height: 16px;

  animation: smooth 0.3s;
  @keyframes smooth {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;
