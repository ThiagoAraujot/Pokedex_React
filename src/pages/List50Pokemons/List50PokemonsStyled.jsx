import styled from "styled-components";

export const PokedexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 90%;
  flex-direction: column;
`;

export const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 90%;

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 90%;
  }

  @media screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 90%;
    overflow-x: hidden;
  }
`;
