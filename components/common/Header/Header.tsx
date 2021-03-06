import styles from "./Header.module.css";

import Link from "next/link";

import { useTheme } from "next-themes";

import LightThemeIcon from "components/icons/theme/Light/Light";
import DarkThemeIcon from "components/icons/theme/Dark/Dark";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={styles.mainHeader}>
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

      {theme && theme === "dark" && (
        <button
          className={styles.themeButton}
          onClick={() => setTheme("light")}
        >
          <LightThemeIcon></LightThemeIcon>
        </button>
      )}

      {theme && theme !== "dark" && (
        <button className={styles.themeButton} onClick={() => setTheme("dark")}>
          <DarkThemeIcon></DarkThemeIcon>
        </button>
      )}
    </header>
  );
};

export default Header;
