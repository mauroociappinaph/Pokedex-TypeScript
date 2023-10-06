import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./pokemon.module.css";
import Footer from "../components/Footer";
import { fetchPokemon } from "../api/fetchPokemon";
import { PokemonDetails } from "../types/types"; // Asegúrate de importar PokemonDetails

const PokemonIndividual = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails | undefined>(); // Define el estado con tipo PokemonDetails | undefined
  const { name } = useParams();
  const navigate = useNavigate();

  console.log("Name:", name);

  useEffect(() => {
    async function getPokemon() {
      try {
        const fetchedPokemon = await fetchPokemon(name as string);
        setPokemon(fetchedPokemon);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }
    getPokemon();
  }, [name]); // Coloca [name] como dependencia para que se actualice cuando cambie el nombre

  return (
    <div className={styles.container}>
      <div className={styles.container_button_title}>
        <div className={styles.container_button}>
          <button onClick={() => navigate(-1)} className={styles.button}>
            <h2>Inicio</h2>
          </button>
        </div>
        <div className={styles.container_title}>
          <h1 className={styles.title}>Datos de Pokemons</h1>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.container_card}>
          {/* Aquí puedes utilizar el estado 'pokemon' para mostrar los detalles */}
          <div className={styles.container_img}>
            <img className={styles.img} src={pokemon?.image} alt="Imagen" />
          </div>
          <div className={styles.container_name_type}>
            <h2 className={styles.name}>{name?.toUpperCase()}</h2>
            <p className={styles.type}>{pokemon?.types.join(", ").toUpperCase()}</p>
          </div>
          <div className={styles.container_info}>
  <div className={styles.info}>
    <div className={styles.info_row}>
      <span className={styles.info_label}>HP:</span>
      <span className={styles.info_value}>{pokemon?.hp}</span>
    </div>
    <div className={styles.info_row}>
      <span className={styles.info_label}>ATTACK:</span>
      <span className={styles.info_value}>{pokemon?.attack}</span>
    </div>
    <div className={styles.info_row}>
      <span className={styles.info_label}>DEFENSE:</span>
      <span className={styles.info_value}>{pokemon?.defense}</span>
    </div>
    <div className={styles.info_row}>
      <span className={styles.info_label}>SPEED:</span>
      <span className={styles.info_value}>{pokemon?.speed}</span>
    </div>
  </div>
</div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PokemonIndividual;
