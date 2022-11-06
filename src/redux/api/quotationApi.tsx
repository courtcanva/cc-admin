import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/constants/environment";
import { IQuotation } from "@/interfaces/quotation";

export const quotationApi = createApi({
  reducerPath: "quotation",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getAllQuotation: builder.query<
      { data: IQuotation[]; total: number; sx: string },
      { offset: number | void; limit: number | void }
    >({
      query: ({ offset, limit }) => `/shopping-cart?offset=${offset}&limit=${limit}`,
    }),
  }),
});

export const { useGetAllQuotationQuery } = quotationApi;
