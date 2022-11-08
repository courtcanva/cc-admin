import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";
import formatDate from "@/utils/formatDate";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "orders",
      transformResponse: (response: any) =>
        response.map((item: any) => {
          item.updatedAt = formatDate(item.updatedAt);
          return item;
        }),
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersApi;
