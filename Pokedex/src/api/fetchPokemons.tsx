import { formatPokemonName } from "../utils/utils";

interface PokemonData {
  name: string;
  id: number;
}

interface Pokemon {
  name: string;
  id: number;
  image: string;
}

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  const results: PokemonData[] = data.results;

  const pokemons: Pokemon[] = results.map((pokemon: PokemonData) => {
    console.log(`Creating Pokemon: ${pokemon.name}`); // Added console.log statement
    return {
      name: pokemon.name,
      id: pokemon.id,
      image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name)}.gif`,
    };
  });

  const uniquePokemons = pokemons.filter(
    (pokemon: Pokemon, index: number) => {
      console.log(`Filtering Pokemon: ${pokemon.name}`); // Added console.log statement
      return pokemons.findIndex((other: Pokemon) => other.id === pokemon.id) === index;
    }
  );

  return uniquePokemons;
}
