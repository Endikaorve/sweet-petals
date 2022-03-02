import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div className={styles.logo}>
        <img src="/assets/img/logo.png" alt="Sweet Petals" />
        Sweet Petals
      </div>
    </Link>
  </header>
);

export default Header;
