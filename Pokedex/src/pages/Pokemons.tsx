import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import styles from "./pokemons.module.css"; // Importa los estilos CSS modules
import { fetchPokemons } from '../api/fetchPokemons';


interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
}

function removeDuplicatePokemons(pokemonList: Pokemon[]): Pokemon[] {
  const uniquePokemonList: Pokemon[] = [];
  const seenNames: Set<string> = new Set();

  for (const pokemon of pokemonList) {
    if (!seenNames.has(pokemon.name)) {
      seenNames.add(pokemon.name);
      uniquePokemonList.push(pokemon);
    }
  }

  return uniquePokemonList;
}

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Agrega el estado isLoading

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const allPokemons = await fetchPokemons();
        const uniquePokemons = removeDuplicatePokemons(allPokemons);
        setPokemons(uniquePokemons);
        setIsLoading(false); // Actualiza el estado isLoading a false cuando los Pokémon se hayan cargado
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchAllPokemons();
  }, []);

  return (
    <div className={styles.app}>
      <Headers query={query} setQuery={setQuery} />

      {/* Muestra el loader mientras los Pokémon se están cargando */}
      {isLoading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <nav className={styles.main}>
          {pokemons.slice(0, 200).map((pokemon) => (
            <Link
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
              className={styles.link}
              key={pokemon.id}
            >
              <img src={pokemon.image} alt={pokemon.image} />
              <div className={styles.container}>
                <span className={styles.linkText}>{pokemon.name}</span>
                <p>{pokemon.types.join(" ")}</p>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      )}

      <Footer />
    </div>
  );
};

export default Pokemons;
