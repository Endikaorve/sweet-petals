import styles from "styles/pages/Details.module.css";

import { NextPage } from "next";
import Head from "next/head";

import Header from "components/shared/Header/Header";

import { Flower } from "interfaces/interfaces";

import { flowers, FLOWER_FERTILIZER_TYPES } from "resources/flowers";

const Details: NextPage = ({ flower }: any) => {
  if (!flower) return <p>Ooops.</p>;

  return (
    <>
      <Head>
        <title>{flower.name}</title>
        <meta name="description" content={flower.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.pageContainer}>
        <section className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={flower.imgUrl}
            alt={flower.name}
          ></img>
        </section>
        <section className={styles.infoContainer}>
          <h2 className={styles.name}>{flower.name}</h2>
          <p className={styles.binomialName}>{flower.binomialName}</p>
          <p className={styles.price}>{flower.price}€</p>
          <p className={styles.heightInCm}>
            <b>Altura:</b> {flower.heightInCm}cm
          </p>
          <p className={styles.fertilizerType}>
            <b>Fertilizante:</b>{" "}
            {FLOWER_FERTILIZER_TYPES[flower.fertilizerType]}
          </p>
          <p className={styles.wateringsPerWeek}>
            <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
          </p>
          <button className={styles.addToCartButton}>Añadir al carrito</button>
        </section>
      </main>
    </>
  );
};

Details.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    flower: flowers.find((flower: Flower) => flower.id.toString() === id),
  };
};

export default Details;
