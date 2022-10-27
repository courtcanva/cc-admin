import { IAdmin, INewAdmin } from "@/interfaces/adminData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["admin"],
  endpoints: (builder) => ({
    getAllAdmin: builder.query({
      query: () => "/admin",
      providesTags: [{ type: "admin", id: "LIST" }],
    }),
    getAdminById: builder.query<IAdmin, string>({
      query: (adminId: string ) => `/admin/${adminId}`,
      providesTags: (_1, _2, adminId) => [{ type: "admin", id: adminId }],
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
      invalidatesTags: (_1, _2, admin) => [
        { type: "admin", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetAllAdminQuery, useGetAdminByIdQuery, useUpdateAdminMutation, useDeleteAdminMutation, useRestoreAdminMutation, useCreateAdminMutation } = adminApi;