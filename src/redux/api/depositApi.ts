import { environment } from "@/constants/environment";
import { IUpdateDeposit } from "@/interfaces/depositData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import _ from "lodash";
import UserTokenService from "../../components/Login/helpers/TokenService";

export const depositApi = createApi({
  reducerPath: "deposit",
  baseQuery: fetchBaseQuery({ 
    baseUrl: environment.apiBaseUrl,
    prepareHeaders: (headers) => {
      const accessToken = UserTokenService.getLocalAccessToken();
      headers.set("authorization", accessToken ? `Bearer ${UserTokenService.getLocalAccessToken()}` : "");
      return headers;
    }
  }),
  tagTypes: ["deposit"],
  endpoints: (builder) => ({
    getDeposit: builder.query<any, void>({
      query: () => `/deposit`,
      providesTags: ["deposit"],
      transformResponse: (result: any, _err, _arg) => _.omit(result, ["createdAt", "_id"])
    }),
    updateDeposit: builder.mutation<any, IUpdateDeposit>({
      query: (deposit) => ({
        url: `/deposit`,
        method: "PATCH",
        body: deposit
      }),
      invalidatesTags: ["deposit"]
    }),
  }),
});

export const {
  useGetDepositQuery,
  useUpdateDepositMutation,
} = depositApi;