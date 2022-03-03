import styles from "./Search.module.css";

const Search = ({ onSearch }: any) => (
  <section className={styles.inputWrapper}>
    <input
      placeholder="Busca aquí..."
      className={styles.input}
      onChange={onSearch}
    ></input>
  </section>
);

export default Search;
