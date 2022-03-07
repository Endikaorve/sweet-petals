import styles from "./DetailsInfo.module.css";

import Link from "next/link";

import Button from "components/ui/atoms/Button/Button";

import { Flower } from "interfaces/interfaces";

import { FLOWER_FERTILIZER_TYPES } from "resources/flowers";

interface Props {
  flower: Flower;
}

const DetailsInfo: React.FC<Props> = ({ flower }) => (
  <div className={styles.infoContainer}>
    <h2 className={styles.name}>{flower.name}</h2>

    <p className={styles.binomialName}>{flower.binomialName}</p>

    <p className={styles.price}>{flower.price}€</p>

    <p className={styles.heightInCm}>
      <b>Altura:</b> {flower.heightInCm}cm
    </p>
    <p className={styles.fertilizerType}>
      <b>Fertilizante:</b> {FLOWER_FERTILIZER_TYPES[flower.fertilizerType]}
    </p>
    <p className={styles.wateringsPerWeek}>
      <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
    </p>

    <Button variant="primary">Añadir al carrito</Button>

    <br />

    <Button variant="secondary">
      <Link href="/">Volver atrás</Link>
    </Button>
  </div>
);

export default DetailsInfo;
