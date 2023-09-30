import Headers from '../components/Headers';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./pokemons.module.css"; // Importa los estilos CSS modules

import BulbasourPic from "../assets/bulbasaur.gif";

const Pokemons = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.app}>
      <Headers query={query} setQuery={setQuery} />

      
        <nav className={styles.main}>
          <Link to="/" className={styles.link}>
            <img src={BulbasourPic} alt="Bulbasour" />
            <div className={styles.container}>
              <span className={styles.linkText}>Bulbasour</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
      

      <Footer />
    </div>
  );
};

export default Pokemons;
