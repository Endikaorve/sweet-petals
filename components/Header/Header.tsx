import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <img src="/assets/img/logo.svg" alt="Sweet Petals" />
    </Link>
  </header>
);

export default Header;
