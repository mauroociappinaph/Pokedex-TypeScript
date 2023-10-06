import React from "react";
import { useParams,  useNavigate } from "react-router-dom";
import styles from "./pokemon.module.css";
import Footer from "../components/Footer";




const PokemonIndividual = () => {
  const { name, type, image } = useParams();
  const navigate = useNavigate();

  console.log("Name:", name);
  console.log("Type:", type);
  console.log("Image:", image);

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
      <div className={styles.container_img}>
        <img className={styles.img} src={image} alt="Imagen" />
      </div>
      <div className={styles.container_name_type}>
        <h2 className={styles.name}>{name?.toUpperCase()}</h2>
        <p className={styles.type}>{type}</p>
      </div>
      <div className={styles.container_info}>
        <p className={styles.info}>
            <div className={styles.container_span_hd}>
          <span className={styles.span_hp}>HP:</span> {""}
            </div>
            <div className={styles.container_span_ad}>
          <span className={styles.span_ad}>ATTACK:</span> {""}
          <span className={styles.span_ad}>DEFENSE:</span> {""}
</div>
          <span className={styles.span_mov}>Movimientos:</span> {""}
        </p>

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(PokemonIndividual);