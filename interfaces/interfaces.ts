export type IFertilizerType = "nitrogen" | "phosphorus";

export interface Flower {
  id: number;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: IFertilizerType;
  heightInCm: number;
}
