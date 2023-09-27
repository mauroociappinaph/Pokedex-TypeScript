/* Headers.js */

import styles from "./headers.module.css";

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Headers = ({query , setQuery} : HeaderProps) => {


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pokedex</h1>
        <input
          className={styles.input}
          placeholder="Search Pokemon"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Headers;
