import styles from "../styles/Home.module.css";
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

import { Flower } from "../interfaces/interfaces";
import { flowers } from "../resources/flowers";

const Home: NextPage = ({ flowers }: any) => {
  const [inputText, setInputText] = useState<string>("");

  const filteredFlowers: Flower[] = flowers.filter((flower: Flower) => {
    const formatedInputText: string = inputText.toLowerCase();

    return (
      flower.name.toLowerCase().includes(formatedInputText) ||
      flower.binomialName.toLowerCase().includes(formatedInputText)
    );
  });

  const onSearch = (event: any) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Sweet Petals</title>
        <meta name="description" content="We really love flowers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Search onSearch={onSearch} />

        <section className={styles.section}>
          {!filteredFlowers.length && (
            <p className={styles.noSearchNotification}>
              ¡Vaya! Parece que no hemos encontrado lo que buscabas.
            </p>
          )}

          {filteredFlowers.map((flower: Flower) => {
            return (
              <Link key={flower.id} href={`/details/${flower.id}`}>
                <article className={styles.article}>
                  <div className={styles.articleHeightInCm}>
                    {flower.heightInCm} cm
                  </div>
                  <div className={styles.articleImgContainer}>
                    <img
                      src={flower.imgUrl}
                      alt={flower.name}
                      className={styles.articleImg}
                    ></img>
                  </div>
                  <div className={styles.articleBody}>
                    <p className={styles.articleBodyName}>{flower.name}</p>
                    <p className={styles.articleBodyBinomialName}>
                      {flower.binomialName}
                    </p>
                    <p className={styles.articleBodyPrice}>{flower.price}€</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};

Home.getInitialProps = async () => {
  return { flowers: flowers };
};

export default Home;
