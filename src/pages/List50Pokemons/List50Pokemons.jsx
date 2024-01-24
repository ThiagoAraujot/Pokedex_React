import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader.jsx";
import { Pokedex, PokedexContainer } from "./List50PokemonsStyled.jsx";

export default function List50Pokemons() {
  const [pokemon, setPokemon] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/api/list_pokemon")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error fetching data: ", error));
    }, 3000);
  }, []);

  return (
    <PokedexContainer>
      <Navbar text="First 50 Pokémons" />
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
