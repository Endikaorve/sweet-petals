export type FertilizerType = "nitrogen" | "phosphorus";

export interface Flower {
  id: number;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: FertilizerType;
  heightInCm: number;
}
