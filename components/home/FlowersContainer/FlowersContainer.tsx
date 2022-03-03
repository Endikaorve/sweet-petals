import styles from "./FlowersContainer.module.css";

import Link from "next/link";

import { IFlower } from "../../../interfaces/interfaces";

const FlowersContainer = ({ flowers }: { flowers: IFlower[] }) => (
  <section className={styles.section}>
    {!flowers.length && (
      <p className={styles.noSearchNotification}>
        ¡Vaya! Parece que no hemos encontrado lo que buscabas.
      </p>
    )}

    {flowers.map((flower: IFlower) => {
      return (
        <Link key={flower.id} href={`/details/${flower.id}`}>
          <article className={styles.article}>
            <div className={styles.articleHeightInCm}>
              {flower.heightInCm} cm
            </div>
            <div className={styles.articleImgContainer}>
              <img
                src={flower.imgUrl}
                alt={flower.name}
                className={styles.articleImg}
              ></img>
            </div>
            <div className={styles.articleBody}>
              <p className={styles.articleBodyName}>{flower.name}</p>
              <p className={styles.articleBodyBinomialName}>
                {flower.binomialName}
              </p>
              <p className={styles.articleBodyPrice}>{flower.price}€</p>
            </div>
          </article>
        </Link>
      );
    })}
  </section>
);

export default FlowersContainer;
