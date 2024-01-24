import styled from "styled-components";

export const ButtonSpace = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  border: none;
  border-radius: 7px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;

  &:hover {
    background-color: #2D6AB3;
    color: #FFCC01;
    scale: calc(0.97);
  }
`;
