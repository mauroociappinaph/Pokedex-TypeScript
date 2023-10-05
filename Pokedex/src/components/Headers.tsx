
import styles from "./headers.module.css";

interface HeadersProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Headers: React.FC<HeadersProps> = ({ query, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pokedex</h1>
        <input
          className={styles.input}
          placeholder="Search Pokemon"
          type="text"
          value={query}
          onChange={handleChange} // Agrega la función onChange aquí
        />
      </div>
    </header>
  );
};

export default Headers;