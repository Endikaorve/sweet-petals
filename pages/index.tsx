import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/shared/Header/Header";
import ListView from "../components/home/ListView/ListView";

import { flowers } from "../resources/flowers";

const Home: NextPage = ({ flowers }: any) => {
  return (
    <>
      <Head>
        <title>Sweet Petals</title>
        <meta name="description" content="We really love flowers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ListView flowers={flowers} />
    </>
  );
};

Home.getInitialProps = async () => {
  return { flowers: flowers };
};

export default Home;
