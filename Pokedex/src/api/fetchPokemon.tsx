// const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

import { PokemonDetails } from "../types/types";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  const pokemon: PokemonDetails = {
    id: result.id,
    name: result.name,
    image: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
    speed: result.stats[5].base_stat,
    height: result.height,
    weight: result.weight,
    types: result.types.map((type: { type: { name: string } }) => type.type.name),
  };
  return pokemon;
}
