import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Pokedex, PokedexContainer } from "./GrassPokemonStyled";
import Loader from "../../components/Loader/Loader";

export function GrassPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/api/grass_pokemon")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error fetching data: ", error));
      setRemoveLoading(true);
    }, 3000);
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
            height={pokemon.height}
            weight={pokemon.weight}
          />
        ))}
      </Pokedex>
      {!removeLoading && <Loader />}
    </PokedexContainer>
  );
}
