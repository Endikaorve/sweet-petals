import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => (
  <main className={styles.mainContainer}>{children}</main>
);

export default Container;
