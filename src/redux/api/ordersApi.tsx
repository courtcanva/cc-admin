import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({ limit = 10, offset = 0, optionalQuery = "", searchQuery = "" }) =>
        `orders?limit=${limit}&offset=${offset}&${optionalQuery}${searchQuery}`,
      providesTags: [{ type: "orders", id: "LIST" }],
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersApi;
