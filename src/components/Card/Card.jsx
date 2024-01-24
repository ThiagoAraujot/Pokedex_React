import { CardContainer, ImgContainer, InfoContainer } from "./CardStyled";
import { getImageURL } from "../../utils.js";

export function Card({ id, name, type, heigth, weight }) {
  const imgURL = getImageURL(id);

  return (
    <CardContainer type={type}>
      <InfoContainer>
        {console.log(type)}
        <h1># 0{id}</h1>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>Heigth: {heigth}</p>
        <p>Weight: {weight}</p>
      </InfoContainer>
      <ImgContainer>
        <img src={imgURL} alt={name} />
      </ImgContainer>
    </CardContainer>
  );
}
