import { Button } from "../../components/Button/Button";
import { ButtonsContainer, Container, Space, Title } from "./HomeStyled";
import logo from "../../images/International_Pokémon_logo.svg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Space>
        <Title>
          <img src={logo} alt="" />
          <h2>Welcome to the Pokémon Universe!</h2>
          <p>Here you can search for all kind off Pokémons</p>
        </Title>
        <ButtonsContainer>
          <Link to="/list50pokemons">
            <Button type="submit" text="First 50 Pokemons" />
          </Link>

          <Link to="/heavy_pokemon">
            <Button type="submit" text="30 < weight > 80" />
          </Link>

          <Link to="/grass_pokemon">
            <Button type="submit" text="Grass type Pokemon" />
          </Link>

          <Link to="/flying_high_pokemon">
            <Button type="submit" text="Flying Pokemons over 10 heigth" />
          </Link>

          <Link to="/inverted_names">
            <Button type="submit" text="Reversed pokemon names" />
          </Link>
        </ButtonsContainer>
      </Space>
    </Container>
  );
}
