import { NextPage } from "next";
import { Flower } from "../../interfaces/interfaces";
import { flowers } from "../../resources/flowers";

const Details: NextPage = ({ flower }: any) => {
  if (!flower) return <p>Ooops.</p>;

  return <p>Details: {flower.name}</p>;
};

Details.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    flower: flowers.find((flower: Flower) => flower.id.toString() === id),
  };
};

export default Details;
