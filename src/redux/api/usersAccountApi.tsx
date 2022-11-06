import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";
import { IUser } from "../../interfaces/userData";
import { ListUserResponse } from "../../interfaces/userData";

export const usersAccountApi = createApi({
  reducerPath: "usersAccountData",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["usersAccount"],
  endpoints: (builder) => ({
    listUsers: builder.query<
      ListUserResponse<IUser>,
      { offset: number | void; limit: number | void }
    >({
      query: ({ offset = 0, limit = 10 }) => `/user?offset=${offset}&limit=${limit}`,
      providesTags: [{ type: "usersAccount", id: "LIST" }],
    }),
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_1, _2, id) => [
        { type: "usersAccount", id },
        { type: "usersAccount", id: "LIST" },
      ],
    }),
  }),
});

export const { useListUsersQuery, useDeleteUserMutation } = usersAccountApi;
