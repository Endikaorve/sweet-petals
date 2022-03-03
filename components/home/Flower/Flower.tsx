import styles from "./Flower.module.css";

import Link from "next/link";

import { IFlower } from "../../../interfaces/interfaces";

const Flower = ({ flower }: { flower: IFlower }) => (
  <Link href={`/details/${flower.id}`}>
    <article className={styles.article}>
      <div className={styles.articleHeightInCm}>{flower.heightInCm} cm</div>
      <div className={styles.articleImgContainer}>
        <img
          src={flower.imgUrl}
          alt={flower.name}
          className={styles.articleImg}
        ></img>
      </div>
      <div className={styles.articleBody}>
        <p className={styles.articleBodyName}>{flower.name}</p>
        <p className={styles.articleBodyBinomialName}>{flower.binomialName}</p>
        <p className={styles.articleBodyPrice}>{flower.price}€</p>
      </div>
    </article>
  </Link>
);

export default Flower;
