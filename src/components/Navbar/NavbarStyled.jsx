import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;

  img {
    width: 15%;
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
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.201) 0px 5px 15px;

    &:hover {
      background-color: #252525;
      scale: calc(0.97);
    }

    i {
      font-size: 1rem;
    }
  }
`;
