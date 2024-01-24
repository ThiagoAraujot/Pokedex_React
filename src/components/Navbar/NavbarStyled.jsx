import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  gap: 1rem;
  text-align: center;

  img {
    width: 15%;

    @media screen and (max-width: 940px) {
      width: 40%;
    }
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
      color: #ffff;
      scale: calc(0.97);
    }

    i {
      font-size: 1rem;
    }
  }
`;

