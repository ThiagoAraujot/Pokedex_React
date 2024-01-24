import { Pokedex, PokedexContainer } from "./HeavyPokemonsStyled";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

export function HeavyPokemons() {
  const [pokemon, setPokemon] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/api/heavy_pokemon")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error fetching data: ", error));
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
