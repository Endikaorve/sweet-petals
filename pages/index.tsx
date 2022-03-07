import styles from "styles/pages/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Header from "components/shared/Header/Header";
import Search from "components/ui/atoms/Search/Search";
import CardList from "components/ui/molecules/CardList/CardList";

import { Flower } from "interfaces/interfaces";

import { flowers } from "resources/flowers";

interface Props {
  flowers: Flower[];
}

const Home: NextPage<Props> = ({ flowers }) => {
  const [inputText, setInputText] = useState<string>("");

  const onSearch = (event: any) => {
    setInputText(event.target.value);
  };

  const filteredFlowers: Flower[] = flowers.filter((flower: Flower) => {
    const formatedInputText: string = inputText.toLowerCase();

    return (
      flower.name.toLowerCase().includes(formatedInputText) ||
      flower.binomialName.toLowerCase().includes(formatedInputText)
    );
  });

  return (
    <>
      <Head>
        <title>Sweet Petals</title>
        <meta name="description" content="We really love flowers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.pageContainer}>
        <Search onSearch={onSearch} />

        <CardList flowers={filteredFlowers} />
      </main>
    </>
  );
};

Home.getInitialProps = async () => {
  // const response = await fetch(
  //   "https://dulces-petalos.herokuapp.com/api/product"
  // );
  // const flowers: any = await response.json();

  return { flowers: flowers as Flower[] };
};

export default Home;
