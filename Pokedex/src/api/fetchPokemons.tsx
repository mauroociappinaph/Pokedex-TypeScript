import { formatPokemonName } from "../utils/utils";
import axios from 'axios';

interface PokemonData {
  name: string;
  id: string; // El ID es una cadena en los datos proporcionados
  sprites: {
    animated: string;
  };
  type: string[]; // Un arreglo de tipos de Pokémon
}

interface Pokemon {
  name: string;
  id: string;
  image: string;
  types: string[]; // Un arreglo de tipos de Pokémon
}



export async function fetchPokemons(limit: number = 200): Promise<Pokemon[]> {
  const response = await axios.get("https://unpkg.com/pokemons@1.1.0/pokemons.json");

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const data = response.data;
  const results: PokemonData[] = data.results.slice(0, limit);

  let index = 0;

  const pokemons: Pokemon[] = results.map((pokemonData: PokemonData) => {
    console.log(`Creating Pokemon: ${pokemonData.name}`);
    const pokemon: Pokemon = {
      name: pokemonData.name,
      id: (index + 1).toString(),
      image: pokemonData.sprites.animated,
      types: pokemonData.type,
    };
    index++;
    return pokemon;
  });

  return pokemons;
}

