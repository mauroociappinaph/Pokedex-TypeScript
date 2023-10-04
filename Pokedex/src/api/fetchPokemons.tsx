import { formatPokemonName } from "../utils/utils";

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

export async function fetchPokemons(limit: number = 150): Promise<Pokemon[]> {
  const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  const results: PokemonData[] = data.results.slice(0, limit);

  let index = 0; // Inicializa el índice

  const pokemons: Pokemon[] = results.map((pokemonData: PokemonData) => {
    console.log(`Creating Pokemon: ${pokemonData.name}`);
    const pokemon: Pokemon = {
      name: pokemonData.name,
      id: (index + 1).toString(),
      image: pokemonData.sprites.animated,
      types: pokemonData.type, // Mapea los tipos de Pokémon
    };
    index++; // Incrementa el índice para el próximo Pokémon
    return pokemon;
  });

  return pokemons;
}

