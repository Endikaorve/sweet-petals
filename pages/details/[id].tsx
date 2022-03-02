import styles from "../../styles/Details.module.css";

import { NextPage } from "next";
import Head from "next/head";

import { Flower } from "../../interfaces/interfaces";
import { flowers } from "../../resources/flowers";

import Header from "../../components/Header/Header";

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
          <h3 className={styles.detailsName}>{flower.name}</h3>
          <p className={styles.detailsBinomialName}>{flower.binomialName}</p>
          <p className={styles.detailsPrice}>{flower.price}€</p>
          <p className={styles.detailsHeightInCm}>
            Altura: {flower.heightInCm}cm
          </p>
          <p className={styles.detailsWateringsPerWeek}>
            Regar: {flower.wateringsPerWeek} veces por semana
          </p>
          <p className={styles.detailsFertilizerType}>
            Fertilizante: {flower.fertilizerType}
          </p>
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
