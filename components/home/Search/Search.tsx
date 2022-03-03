import styles from "./Search.module.css";

const Search = ({ onSearch }: any) => (
  <div className={styles.inputContainer}>
    <input
      placeholder="Busca aquí..."
      className={styles.input}
      onChange={onSearch}
    ></input>
  </div>
);

export default Search;
