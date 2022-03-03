import styles from "./Search.module.css";

const Search = ({ onSearch }: any) => (
  <section className={styles.inputContainer}>
    <input
      placeholder="Busca aquí..."
      className={styles.input}
      onChange={onSearch}
    ></input>
  </section>
);

export default Search;
