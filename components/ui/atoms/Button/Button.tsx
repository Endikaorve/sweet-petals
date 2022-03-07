import styles from "./Button.module.css";

interface Props {
  variant: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ variant, children }) => (
  <button className={`${styles.btn} ${styles[`btn-${variant}`]}`}>
    {children}
  </button>
);

export default Button;
