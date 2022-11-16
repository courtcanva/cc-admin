import { IDesign } from "@/interfaces/design";

export interface IQuotation {
  _id: string;
  quotation: string;
  image: string;
  quotationDetails: IQuotationDetail[];
  isExpired: boolean;
  user_id: string;
  design: IDesign;
}

interface IQuotationDetail {
  color: string;
  quantity: number;
}
