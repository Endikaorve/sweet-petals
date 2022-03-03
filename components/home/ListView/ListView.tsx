import styles from "./ListView.module.css";

import Link from "next/link";

import Search from "../Search/Search";
import { useState } from "react";
import { IFlower } from "../../../interfaces/interfaces";

const ListView = ({ flowers }: { flowers: IFlower[] }) => {
  const [inputText, setInputText] = useState<string>("");

  const filteredFlowers: IFlower[] = flowers.filter((flower: IFlower) => {
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
    <main className={styles.main}>
      <Search onSearch={onSearch} />

      <section className={styles.section}>
        {!filteredFlowers.length && (
          <p className={styles.noSearchNotification}>
            ¡Vaya! Parece que no hemos encontrado lo que buscabas.
          </p>
        )}

        {filteredFlowers.map((flower: IFlower) => {
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
  );
};

export default ListView;
