import styles from "./ListView.module.css";

import { useState } from "react";

import Search from "components/home/Search/Search";
import FlowersContainer from "components/home/FlowersContainer/FlowersContainer";

import { Flower } from "interfaces/interfaces";

const ListView = ({ flowers }: { flowers: Flower[] }) => {
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
    <main className={styles.main}>
      <Search onSearch={onSearch} />

      <FlowersContainer flowers={filteredFlowers}></FlowersContainer>
    </main>
  );
};

export default ListView;
