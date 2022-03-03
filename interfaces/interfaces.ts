export type IFertilizerType = "nitrogen" | "phosphorus";

export interface IFlower {
  id: number;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: IFertilizerType;
  heightInCm: number;
}
