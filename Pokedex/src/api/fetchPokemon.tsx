// const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

import { PokemonDetails } from "../types/types";

export async function fetchPokemons(name: string): Promise<PokemonDetails[]> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data.results;
}
