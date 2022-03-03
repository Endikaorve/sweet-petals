import styles from "./Card.module.css";

import Link from "next/link";

import { Flower } from "interfaces/interfaces";

const Card = ({ flower }: { flower: Flower }) => (
  <Link href={`/details/${flower.id}`}>
    <article className={styles.container}>
      <div className={styles.heightInCm}>{flower.heightInCm} cm</div>
      <div className={styles.imageContainer}>
        <img
          src={flower.imgUrl}
          alt={flower.name}
          className={styles.image}
        ></img>
      </div>
      <div className={styles.body}>
        <p className={styles.bodyName}>{flower.name}</p>
        <p className={styles.bodyBinomialName}>{flower.binomialName}</p>
        <p className={styles.bodyPrice}>{flower.price}€</p>
      </div>
    </article>
  </Link>
);

export default Card;
