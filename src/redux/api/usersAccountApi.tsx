import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";
import { IUser } from "../../interfaces/userData";

export const usersAccountApi = createApi({
  reducerPath: "usersAccountData",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["usersAccount"],
  endpoints: (builder) => ({
    listUsers: builder.query<
    { data: IUser[]; total: number },
    { offset: number | void; limit: number | void; optionalQuery: string | void }
    >({
    query: ({ offset, limit, optionalQuery }) => `/user?offset=${offset}&limit=${limit}${optionalQuery}`,
    providesTags: [{ type: "usersAccount", id: "LIST" }],
    }),
  }),
});

export const { useListUsersQuery } = usersAccountApi;
