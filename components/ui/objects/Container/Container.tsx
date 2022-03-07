import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => (
  <div className={styles.mainContainer}>{children}</div>
);

export default Container;
