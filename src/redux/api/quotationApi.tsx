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
      { data: IQuotation[]; total: number },
      { offset: number; limit: number; optionalQuery: string }
    >({
      query: ({ offset, limit, optionalQuery }) =>
        `/shopping-cart/admin?offset=${offset}&limit=${limit}${optionalQuery}`,
    }),
  }),
});

export const { useGetAllQuotationQuery } = quotationApi;
