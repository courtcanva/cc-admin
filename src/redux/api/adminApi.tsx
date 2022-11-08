import { IAdmin, INewAdmin } from "@/interfaces/adminData";
import formatDate from "@/utils/formatDate";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";
import UserTokenService from "../../components/Login/helpers/TokenService";
import _ from "lodash";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ 
    baseUrl: environment.apiBaseUrl,
    prepareHeaders: (headers, { getState } ) => {
      const accessToken = UserTokenService.getLocalAccessToken();
      headers.set("authorization", accessToken ? `Bearer ${UserTokenService.getLocalAccessToken()}` : "");
      return headers;
    }
   }),
  tagTypes: ["admin"],
  endpoints: (builder) => ({
    getAllAdmin: builder.query<Omit<IAdmin, "__v" | "password" | "hashedRefreshToken">[], void>({
      query: () => "/admin",
      providesTags: [{ type: "admin", id: "LIST" }],
      transformResponse: (response: IAdmin[]) => 
        response.map((item) => { 
          item.createdAt = formatDate(item.createdAt);
          item.updatedAt = formatDate(item.updatedAt);
          return _.omit(item, ["__v", "password", "hashedRefreshToken"]);
        }),
    }),
    getAdminById: builder.query<Omit<IAdmin, "__v" | "password" | "hashedRefreshToken">, string>({
      query: (adminId: string ) => `/admin/${adminId}`,
      providesTags: (_1, _2, adminId) => [{ type: "admin", id: adminId }],
      transformResponse: (item: IAdmin) => {
        item.createdAt = formatDate(item.createdAt);
        item.updatedAt = formatDate(item.updatedAt);
        return _.omit(item, ["__v", "password", "hashedRefreshToken"]);
        },
    }),
    updateAdmin: builder.mutation({
      query: (admin: IAdmin) => ({
        url: `/admin/${admin._id}`,
        method: "PATCH",
        body: admin,
      }),
      invalidatesTags: (_1, _2, admin) => [
        { type: "admin", id: admin._id },
        { type: "admin", id: "LIST" },
      ],
    }),
    setAdminPermission: builder.mutation({
      query: (admin: IAdmin) => ({
        url: `/admin/${admin._id}/setPermission`,
        method: "PATCH",
        body: admin,
      }),
      invalidatesTags: (_1, _2, admin) => [
        { type: "admin", id: admin._id },
        { type: "admin", id: "LIST" },
      ],
    }),
    deleteAdmin: builder.mutation({
      query: (adminId: string) => ({
        url: `/admin/${adminId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_1, _2, adminId) => [
        { type: "admin", id: adminId },
        { type: "admin", id: "LIST" },
      ],
    }),
    restoreAdmin: builder.mutation({
      query: (adminId: string) => ({
        url: `/admin/${adminId}/restore`,
        method: "PATCH",
      }),
      invalidatesTags: (_1, _2, adminId) => [
        { type: "admin", id: adminId },
        { type: "admin", id: "LIST" },
      ],
    }),
    createAdmin: builder.mutation({
      query: (admin: INewAdmin) => ({
        url: `/admin/register`,
        method: "POST",
        body: admin,
      }),
      invalidatesTags: () => [{ type: "admin", id: "LIST" }],
    }),
  }),
});

export const { useGetAllAdminQuery, useGetAdminByIdQuery, useUpdateAdminMutation, useSetAdminPermissionMutation, useDeleteAdminMutation, useRestoreAdminMutation, useCreateAdminMutation } = adminApi;