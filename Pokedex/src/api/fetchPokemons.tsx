// const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json"

export async function fetchPokemons(){
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
   
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const results = await response.json();
    console.log(results);
    
    const pokemons = results.map((pokemon : any) => {
        return {
            name: pokemon.name,
            id: pokemon.id,
            image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
        };
    });
    const uniquePokemons = pokemons.filter(
        (pokemon: any , index: number) => pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    )
    return uniquePokemons;
}