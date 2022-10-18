import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../constants/environment";
import { ICourt } from "../../interfaces/courtData";

export const courtsApi = createApi({
  reducerPath: "courtData",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["courts"],
  endpoints: (builder) => ({
    getAllCourt: builder.query({
      query: () => "/courts",
      providesTags: [{ type: "courts", id: "LIST" }],
    }),
    getCourtById: builder.query({
      query: (courtID: string) => `/courts/${courtID}`,
      providesTags: (_1, _2, courtID) => [{ type: "courts", id: courtID }],
    }),
    updateCourt: builder.mutation({
      query: (court: ICourt) => ({
        url: `/courts/${court._id}`,
        method: "PUT",
        body: court,
      }),
      invalidatesTags: (_1, _2, court) => [
        { type: "courts", id: court._id },
        { type: "courts", id: "LIST" },
      ],
    }),
    deleteCourt: builder.mutation({
      query: (court: ICourt) => ({
        url: `/courts/${court._id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_1, _2, court) => [
        { type: "courts", id: court._id },
        { type: "courts", id: "LIST" },
      ],
    }),
    createCourt: builder.mutation({
      query: (court: ICourt) => ({
        url: "/courts",
        method: "POST",
        body: court,
      }),
      invalidatesTags: [{ type: "courts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllCourtQuery,
  useGetCourtByIdQuery,
  useUpdateCourtMutation,
  useDeleteCourtMutation,
  useCreateCourtMutation,
} = courtsApi;
