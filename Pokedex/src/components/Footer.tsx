import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/pokemons" className={styles.link}>
        <img src={PokemonPic} alt="Pokeball" className={styles.image} />
        Pokemons
      </Link>
      <Link
        onClick={(e) => e.preventDefault()}
        to="/items"
        className={styles.link}
      >
        <img src={ItemsPic} alt="Pokeball" className={styles.image} />
        Items
      </Link>
      <Link
        onClick={(e) => e.preventDefault()}
        to="/maps"
        className={styles.link}
      >
        <img src={LocationPic} alt="Pokeball" className={styles.image} />
        Maps
      </Link>
    </footer>
  );
};

export default Footer;
