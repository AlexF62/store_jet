import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '@/store/types/category.interface';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
  endpoints: (builder) => ({
    getAll: builder.query<ICategory[], void>({
      query: () => 'categories?public=photos',
    }),
    getById: builder.query<ICategory, string | number>({
      query: (id) => `${id}`,
    }),
    getBySlug: builder.query<ICategory, string>({
      query: (slug) => `by-slug/${slug}`,
    }),
    create: builder.mutation<ICategory, { slug: string }>({
      query: ({ slug }) => ({
        url: '',
        method: 'POST',
        body: { slug },
      }),
    }),
    update: builder.mutation<ICategory, { id: string | number; name: string }>({
      query: ({ id, name }) => ({
        url: `${id}`,
        method: 'PUT',
        body: { name },
      }),
    }),
    delete: builder.mutation<ICategory, string | number>({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetByIdQuery,
  useGetBySlugQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = categoryApi;