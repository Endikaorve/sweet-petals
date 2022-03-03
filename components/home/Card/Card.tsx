import styles from "./Card.module.css";

import Link from "next/link";

import { Flower } from "interfaces/interfaces";

interface Props {
  flower: Flower;
}

const Card: React.FC<Props> = ({ flower }) => (
  <Link href={`/details/${flower.id}`}>
    <article className={styles.container}>
      <div className={styles.heightInCm}>{flower.heightInCm} cm</div>
      <div className={styles.imageWrapper}>
        <img
          src={flower.imgUrl}
          alt={flower.name}
          className={styles.image}
        ></img>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>{flower.name}</p>
        <p className={styles.binomialName}>{flower.binomialName}</p>
        <p className={styles.price}>{flower.price}€</p>
      </div>
    </article>
  </Link>
);

export default Card;
