import styles from "./Search.module.css";

const Search = ({ onSearch }: any) => (
  <div className={styles.inputContainer}>
    <input
      placeholder="Comienza a escribir para buscar..."
      className={styles.input}
      onChange={onSearch}
    ></input>
  </div>
);

export default Search;
