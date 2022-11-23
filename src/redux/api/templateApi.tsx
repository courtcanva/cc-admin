import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/constants/environment";
import { ITemplate, ITemplateDataDb } from "@/interfaces/template";
import _ from "lodash";

export const templateApi = createApi({
  reducerPath: "templates",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiBaseUrl }),
  tagTypes: ["template"],
  endpoints: (builder) => ({
    getTemplates: builder.query<Omit<ITemplateDataDb, "__v" | "isDeleted">[], {userId? : string | void, status : string | void}>({
      query: ({userId, status}) => (userId ? `/templates?user_id=${userId}` : `/templates?status=${status}`),
      transformResponse: (result: ITemplateDataDb[], _meta, _arg) => {
        return result.map((item) => _.omit(item, ["__v", "isDeleted"]));
      },
      providesTags: (result, _err, _arg) =>
        result
          ? [...result.map(({ _id }) => ({ type: "template" as const, id: _id })), "template"]
          : ["template"],
    }),

    updateTemplate: builder.mutation<ITemplateDataDb, Partial<ITemplate> & Pick<ITemplate, "_id">>({
      query: (template) => ({
        url: `/templates/${template._id}`,
        method: "PUT",
        body: template,
      }),
      invalidatesTags: (_result, _err, arg) => [{ type: "template", id: arg._id }],
    }),
  }),
});

export const {
  useGetTemplatesQuery,
  useUpdateTemplateMutation,
} = templateApi;
