import styles from "./Header.module.css";

import Link from "next/link";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <div className={styles.logo}>
        <img
          className={styles.logoImage}
          src="/assets/img/logo.png"
          alt="Sweet Petals"
        />
        <h1 className={styles.logoName}>Sweet Petals</h1>
      </div>
    </Link>
  </header>
);

export default Header;
