import styled from "styled-components";

export const Menu = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem 0 0.5rem 0.5rem;
  transition: all 200ms ease-in-out;
  
  @keyframes rotate {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Modal = styled.div`
  width: 150px;
  position: absolute;
  top: 60px;
  z-index: 999;
  transform: translateX(45%);
  transition: all 200ms ease-in-out;
  overflow: hidden;
  background: rgba(13, 17, 23, 1);
  border: 1px solid #21262d;
  border-radius: 5px;
  padding: 2rem 0;

  @media (max-width: 400px) {
    padding: 0 2%;
  }
`;

export const Stack = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  color: rgba(255, 255, 255, 0.95) !important;
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  transition: all 200ms ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
