import styles from "./CardList.module.css";

import Card from "components/home/Card/Card";

import { Flower } from "interfaces/interfaces";

const CardList = ({ flowers }: { flowers: Flower[] }) => (
  <section className={styles.section}>
    {!flowers.length && (
      <p className={styles.noSearchNotification}>
        ¡Vaya! Parece que no hemos encontrado lo que buscabas.
      </p>
    )}

    {flowers.map((flower: Flower) => (
      <Card key={flower.id} flower={flower}></Card>
    ))}
  </section>
);

export default CardList;
