import styles from "./Header.module.css";

import Link from "next/link";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div className={styles.logo}>
        <img src="/assets/img/logo.png" alt="Sweet Petals" />
        <h1>Sweet Petals</h1>
      </div>
    </Link>
  </header>
);

export default Header;
