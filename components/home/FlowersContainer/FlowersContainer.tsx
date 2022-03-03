import styles from "./FlowersContainer.module.css";

import Flower from "../Flower/Flower";

import { IFlower } from "../../../interfaces/interfaces";

const FlowersContainer = ({ flowers }: { flowers: IFlower[] }) => (
  <section className={styles.section}>
    {!flowers.length && (
      <p className={styles.noSearchNotification}>
        ¡Vaya! Parece que no hemos encontrado lo que buscabas.
      </p>
    )}

    {flowers.map((flower: IFlower) => (
      <Flower key={flower.id} flower={flower}></Flower>
    ))}
  </section>
);

export default FlowersContainer;
