import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import styles from "./pokemons.module.css"; // Importa los estilos CSS modules
import { fetchPokemons } from '../api/fetchPokemons';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const allPokemons = await fetchPokemons();
        setPokemons(allPokemons);
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
        {pokemons.slice(0, 152).map((pokemon) => (
          <Link to={`/pokemons/${pokemon.name.toLowerCase()}`} 
          className={styles.link} key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className={styles.container}>
              <span className={styles.linkText}>{pokemon.name}</span>
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
