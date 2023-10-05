import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import styles from "./pokemons.module.css"; // Importa los estilos CSS modules
import { fetchPokemons } from '../api/fetchPokemons';
import Pagination from "../components/paginado";


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
  const [currentPage, setCurrentPage] = useState(1);

  // Función para manejar el cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const allPokemons = await fetchPokemons();
        const uniquePokemons = removeDuplicatePokemons(allPokemons);
        setPokemons(uniquePokemons);
       // Simula un tiempo de carga de 3 segundos antes de mostrar los Pokémon
       setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchAllPokemons();
  }, []);

  const itemsPerPage = 9; // Número de elementos por página
  const totalPages = Math.ceil(pokemons.length / itemsPerPage); // Cálculo del número total de páginas

  return (
    <div className={styles.app}>
      <Headers query={query} setQuery={setQuery} />

      {/* Muestra el loader mientras los Pokémon se están cargando */}
      {isLoading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <nav className={styles.main}>
          {pokemons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((pokemon) => (
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
      
      {/* Muestra el componente de paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </div>
  );
};

export default Pokemons;