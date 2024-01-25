import styled from "styled-components";

export const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  color: #e7e7e7;

  img {
    width: 70%;
    filter: drop-shadow(10px 0 20px rgba(0, 0, 0, 0.2));
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

    @media screen and (max-width: 940px) {
      margin: 0 auto;
    }
  }
`;

export const Space = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aec6cb;
  padding: 2rem;
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 1400px) {
    padding: 2rem;
    width: 50%;
  }

  @media screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 6rem;
  }

  @media screen and (max-width: 1400px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 940px) {
    text-align: center;
  }
`;
