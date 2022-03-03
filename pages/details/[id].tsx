import styles from "../../styles/Details.module.css";

import { NextPage } from "next";
import Head from "next/head";

import { IFlower } from "../../interfaces/interfaces";
import { flowers, FLOWER_FERTILIZER_TYPES } from "../../resources/flowers";

import Header from "../../components/shared/Header/Header";

const Details: NextPage = ({ flower }: any) => {
  if (!flower) return <p>Ooops.</p>;

  return (
    <>
      <Head>
        <title>{flower.name}</title>
        <meta name="description" content={flower.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

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
            <b>Fertilizante:</b>{" "}
            {FLOWER_FERTILIZER_TYPES[flower.fertilizerType]}
          </p>
          <p className={styles.detailsWateringsPerWeek}>
            <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
          </p>
          <button className={styles.button}>Añadir al carrito</button>
        </section>
      </main>
    </>
  );
};

Details.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    flower: flowers.find((flower: IFlower) => flower.id.toString() === id),
  };
};

export default Details;
