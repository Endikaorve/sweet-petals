import styles from "./Details.module.css";

import { NextPage } from "next";
import Head from "next/head";

import Container from "components/ui/objects/Container/Container";
import Header from "components/common/Header/Header";

import { Flower } from "interfaces/interfaces";

import { flowers } from "resources/flowers";
import DetailsInfo from "components/ui/molecules/DetailsInfo/DetailsInfo";

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

        <section className={styles.detailsContainer}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={flower.imgUrl}
              alt={flower.name}
            ></img>
          </div>

          <DetailsInfo flower={flower}></DetailsInfo>
        </section>
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
