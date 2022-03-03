import styles from "./Search.module.css";
interface Props {
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<Props> = ({ onSearch }) => (
  <section className={styles.inputWrapper}>
    <input
      placeholder="Busca aquí..."
      className={styles.input}
      onChange={onSearch}
    ></input>
  </section>
);

export default Search;
