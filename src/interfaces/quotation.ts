import { IDesign } from "@/interfaces/design";

export interface IQuotation extends Object {
  _id: string;
  quotation: string;
  image: string;
  quotationDetails: IQuotationDetail[];
  isExpired: boolean;
  user_id: string;
  design: IDesign;
}

export interface IQuotationDetail {
  color: string;
  quantity: number;
}
