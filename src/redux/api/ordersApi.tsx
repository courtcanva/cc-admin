import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({ limit, offset, optionalQuery, searchQuery }) =>
        `orders/admin?limit=${limit}&offset=${offset}&${optionalQuery}${searchQuery}`,
      providesTags: [{ type: "orders", id: "LIST" }],
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersApi;
