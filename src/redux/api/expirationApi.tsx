import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/constants/environment";
import { IUpdateExpiration,IExpiration } from "@/interfaces/expirationData";
import formatDate from "@/utils/formatDate";
import UserTokenService from "../../components/Login/helpers/TokenService";

import _ from "lodash";

export const expirationApi = createApi({
    reducerPath: "expiration",
    baseQuery: fetchBaseQuery({
      baseUrl: environment.apiBaseUrl,
      prepareHeaders: (headers) => {
        const accessToken = UserTokenService.getLocalAccessToken();
        headers.set(
          "authorization",
          accessToken ? `Bearer ${UserTokenService.getLocalAccessToken()}` : ""
        );
        return headers;
      },
    }),
    tagTypes: ["expiration"],
    endpoints: (builder) => ({
      getExpiration: builder.query<any, void>({
        query: () => `/expire-day`,
        providesTags: ["expiration"],
        transformResponse: (result: any, _err, _arg) => {
          result.updatedAt = formatDate(result.updatedAt);
          return _.omit(result, ["createdAt", "_id"]);
        },
      }),
      updateExpiration: builder.mutation<IExpiration, IUpdateExpiration>({
        query: (expiration) => ({
          url: `/expire-day`,
          method: "PATCH",
          body: expiration,
        }),
        invalidatesTags: ["expiration"],
      }),
    }),
  });
  
  export const { useLazyGetExpirationQuery, useGetExpirationQuery, useUpdateExpirationMutation } = expirationApi;
