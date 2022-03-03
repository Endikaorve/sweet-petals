import styles from "./DetailsView.module.css";

import { IFlower } from "interfaces/interfaces";

import { FLOWER_FERTILIZER_TYPES } from "resources/flowers";

const DetailsView = ({ flower }: { flower: IFlower }) => (
  <main className={styles.main}>
    <section className={styles.imgContainer}>
      <img src={flower.imgUrl} alt={flower.name}></img>
    </section>
    <section className={styles.detailsContainer}>
      <h2 className={styles.detailsName}>{flower.name}</h2>
      <p className={styles.detailsBinomialName}>{flower.binomialName}</p>
      <p className={styles.detailsPrice}>{flower.price}€</p>
      <p className={styles.detailsHeightInCm}>
        <b>Altura:</b> {flower.heightInCm}cm
      </p>
      <p className={styles.detailsFertilizerType}>
        <b>Fertilizante:</b> {FLOWER_FERTILIZER_TYPES[flower.fertilizerType]}
      </p>
      <p className={styles.detailsWateringsPerWeek}>
        <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
      </p>
      <button className={styles.button}>Añadir al carrito</button>
    </section>
  </main>
);

export default DetailsView;
