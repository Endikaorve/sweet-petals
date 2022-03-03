import { NextPage } from "next";
import Head from "next/head";

import Header from "components/shared/Header/Header";
import DetailsView from "components/details/DetailsView/DetailsView";

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

      <DetailsView flower={flower} />
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
