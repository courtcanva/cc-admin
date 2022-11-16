export type IUpdateDeposit = Omit<IDeposit, "updatedAt">

export interface IDeposit {
  depositRate: number;
  updatedAt: string;
}