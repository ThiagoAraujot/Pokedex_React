import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

export const Space = styled.div`
  padding: 1rem;
  /*background-color: #5e139c;*/
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  backdrop-filter: blur(10px);
`;

export const Title = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: #1b1b1b;
    letter-spacing: 0.07rem;
    font-family: "Source Code Pro", monospace;
  }

  p {
    font-size: 1.1rem;
    color: #1b1b1b;
    font-family: "Source Code Pro", monospace;
  }
  img {
    width: 50%;
    padding: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  /*9display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.6rem;*/
`;
