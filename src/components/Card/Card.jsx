import { CardContainer, ImgContainer, InfoContainer } from "./CardStyled";
import { getImageURL } from "../../utils.js";

export function Card({ id, name, type, height, weight }) {
  const imgURL = getImageURL(id);

  return (
    <CardContainer type={type}>
      <InfoContainer>
        <h1># 0{id}</h1>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>Heigth: {height}</p>
        <p>Weight: {weight}</p>
      </InfoContainer>
      <ImgContainer>
        <img src={imgURL} alt={name} />
      </ImgContainer>
    </CardContainer>
  );
}
