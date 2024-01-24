import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Pokedex, PokedexContainer } from "./InvertedNamesStyled";

export default function InvertedNames() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/inverted_names")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <PokedexContainer>
      <Navbar />
      <Pokedex>
        {pokemon.map((pokemon) => (
          <Card
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types.join(" ")}
            image={pokemon.image}
            heigth={pokemon.heigth}
            weight={pokemon.weight}
          />
        ))}
      </Pokedex>
    </PokedexContainer>
  );
}
