import styles from "./Details.module.css";

import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Container from "components/ui/objects/Container/Container";
import Header from "components/common/Header/Header";
import Button from "components/ui/atoms/Button/Button";

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

      <Container>
        <Header />

        <div className={styles.detailsContainer}>
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
            <Button variant="primary">Añadir al carrito</Button>
            <br />

            <Button variant="secondary">
              <Link href="/">Volver atrás</Link>
            </Button>
          </section>
        </div>
      </Container>
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
