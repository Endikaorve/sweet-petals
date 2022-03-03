import styles from "./DetailsView.module.css";

import { Flower } from "interfaces/interfaces";

import { FLOWER_FERTILIZER_TYPES } from "resources/flowers";

const DetailsView = ({ flower }: { flower: Flower }) => (
  <main className={styles.mainContainer}>
    <section className={styles.imageContainer}>
      <img className={styles.image} src={flower.imgUrl} alt={flower.name}></img>
    </section>
    <section className={styles.sheetContainer}>
      <h2 className={styles.sheetName}>{flower.name}</h2>
      <p className={styles.sheetBinomialName}>{flower.binomialName}</p>
      <p className={styles.sheetPrice}>{flower.price}€</p>
      <p className={styles.sheetHeightInCm}>
        <b>Altura:</b> {flower.heightInCm}cm
      </p>
      <p className={styles.sheetFertilizerType}>
        <b>Fertilizante:</b> {FLOWER_FERTILIZER_TYPES[flower.fertilizerType]}
      </p>
      <p className={styles.sheetWateringsPerWeek}>
        <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
      </p>
      <button className={styles.sheetButton}>Añadir al carrito</button>
    </section>
  </main>
);

export default DetailsView;
