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

// Función para eliminar duplicados de la lista de Pokémon
function removeDuplicates(pokemons: Pokemon[]): Pokemon[] {
  const uniquePokemons: Pokemon[] = [];
  const seenNames: Set<string> = new Set();

  for (const pokemon of pokemons) {
    if (!seenNames.has(pokemon.name)) {
      seenNames.add(pokemon.name);
      uniquePokemons.push(pokemon);
    }
  }

  return uniquePokemons;
}

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const allPokemons = await fetchPokemons();
        console.log("All Pokemons:", allPokemons); // Agrega este console.log
        const uniquePokemons = removeDuplicates(allPokemons); // Llama a la función para eliminar duplicados
        console.log("Unique Pokemons:", uniquePokemons)
        setPokemons(uniquePokemons);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchAllPokemons();
  }, []);


  return (
    <div className={styles.app}>
      <Headers query={query} setQuery={setQuery} />

      <nav className={styles.main}>
      {pokemons.slice(0, 200).map((pokemon) => (
  <Link
    to={`/pokemons/${pokemon.name.toLowerCase()}`}
    className={styles.link}
    key={pokemon.id} // Agrega un atributo 'key' único aquí
  >
    <img src={pokemon.image} alt={pokemon.name} />
    <div className={styles.container}>
      <span className={styles.linkText}>{pokemon.name}</span>
      <p>{pokemon.types}</p>
      <span>{pokemon.id}</span>
    </div>
  </Link>
))}

      </nav>

      <Footer />
    </div>
  );
};

export default Pokemons;
