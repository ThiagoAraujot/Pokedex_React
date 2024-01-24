import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 3rem 2rem;
  background-color: #b8b8b8;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-bottom: 2px solid white;
  color: #ffffff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    color: #ffffff7e;
    font-size: 2.3rem;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    font-size: 1.6rem;
    padding: 0.5em 0;
  }

  h3 {
    background-color: #ffffff56;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 10px;
    padding: 0.1rem 0.2rem;
    text-transform: capitalize;
  }

  p {
    background-color: #ffff;
    color: #000;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    border-radius: 10px;
    padding: 0.1rem 0.2rem;
    text-transform: capitalize;
  }

  ${({ type }) => type === "grass poison" && "background-color: #49D0B0;"}
  ${({ type }) => type === "grass poison" && "box-shadow: 0 0 25px 0 #49D0B0;"}
  
  ${({ type }) => type === "fire" && "background-color: #FC6C6D;"}
  ${({ type }) => type === "fire" && "box-shadow: 0 0 25px 0 #FC6C6D;"}
  ${({ type }) => type === "fire flying" && "background-color: #FC6C6D;"}
  ${({ type }) => type === "fire flying" && "box-shadow: 0 0 25px 0 #FC6C6D;"}

  ${({ type }) => type === "water" && "background-color: #609FB5;"}
  ${({ type }) => type === "water" && "box-shadow: 0 0 25px 0 #609FB5;"}

  ${({ type }) => type === "normal flying" && "background-color: #BAB0D5;"}
  ${({ type }) => type === "normal flying" && "box-shadow: 0 0 25px 0 #BAB0D5;"}

  ${({ type }) => type === "normal" && "background-color: #C2C2A1;"}
  ${({ type }) => type === "normal" && "box-shadow: 0 0 25px 0 #C2C2A1;"}

  ${({ type }) => type === "bug" && "background-color: #C3CE75;"}
  ${({ type }) => type === "bug" && "box-shadow: 0 0 25px 0 #C3CE75;"}
  ${({ type }) => type === "bug flying" && "background-color: #C3CE75;"}
  ${({ type }) => type === "bug flying" && "box-shadow: 0 0 25px 0 #C3CE75;"}
  ${({ type }) => type === "bug poison" && "background-color: #C3CE75;"}
  ${({ type }) => type === "bug poison" && "box-shadow: 0 0 25px 0 #C3CE75;"}
  ${({ type }) => type === "bug grass" && "background-color: #C3CE75;"}
  ${({ type }) => type === "bug grass" && "box-shadow: 0 0 25px 0 #C3CE75;"}

  ${({ type }) => type === "electric" && "background-color: #FFD86F;"}
  ${({ type }) => type === "electric" && "box-shadow: 0 0 25px 0 #FFD86F;"}

  ${({ type }) => type === "poison" && "background-color: #7C538C;"}
  ${({ type }) => type === "poison" && "box-shadow: 0 0 25px 0 #7C538C;"}
  ${({ type }) => type === "poison ground" && "background-color: #7C538C;"}
  ${({ type }) => type === "poison ground" && "box-shadow: 0 0 25px 0 #7C538C;"}
  ${({ type }) => type === "poison flying" && "background-color: #7C538C;"}
  ${({ type }) => type === "poison flying" && "box-shadow: 0 0 25px 0 #7C538C;"}

  ${({ type }) => type === "ground" && "background-color: #B1736C;"}
  ${({ type }) => type === "ground" && "box-shadow: 0 0 25px 0 #B1736C;"}

  ${({ type }) => type === "fairy" && "background-color: #F469A9;"}
  ${({ type }) => type === "fairy" && "box-shadow: 0 0 25px 0 #F469A9;"}
  ${({ type }) => type === "normal fairy" && "background-color: #F469A9;"}
  ${({ type }) => type === "normal fairy" && "box-shadow: 0 0 25px 0 #F469A9;"}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImgContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 50%;

  img {
    width: 80%;
    /*height: 100%;*/
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
    filter: brightness(1.2);
  }
`;
