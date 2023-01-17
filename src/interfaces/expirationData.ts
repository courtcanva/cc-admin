export type IUpdateExpiration = Omit<IExpiration, "updatedAt">

export interface IExpiration {
  expireDays: number;
  updatedAt: string;
}