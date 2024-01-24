import styled from "styled-components";

export const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  img {
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    border: none;
    border-radius: 7px;
    backdrop-filter: blur(10px);
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.201) 0px 5px 15px;

    &:hover {
      background-color: #b1b1b1bf;
      scale: calc(0.97);
    }

    i {
      font-size: 1rem;
    }
  }
`;

export const Space = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7d7d7;
  padding: 2rem;
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const InfoError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-size: 3rem;
  }
`;
