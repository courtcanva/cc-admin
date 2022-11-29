import { environment } from "@/constants/environment";
import { IAdminDashboardData } from "@/interfaces/dashboardData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import UserTokenService from "../../components/Login/helpers/TokenService";

export const dashboardApi = createApi({
  reducerPath: "dashboard",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.apiBaseUrl,
    // prepareHeaders: (headers) => {
    //   const accessToken = UserTokenService.getLocalAccessToken();
    //   headers.set(
    //     "authorization",
    //     accessToken ? `Bearer ${UserTokenService.getLocalAccessToken()}` : ""
    //   );
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getDashboardData: builder.query<IAdminDashboardData, void>({
      query: () => "/admin-dashboard/",
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
