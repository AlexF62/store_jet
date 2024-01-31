import {  IProduct } from '@/store/types/product.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
  endpoints: (builder) => ({
    getAll: builder.query<IProduct, void>({
      query: () => 'products',
    }),
    getById: builder.query<IProduct, string | number>({
      query: (id) => `${id}`,
    }),
    getBySlug: builder.query<IProduct, string>({
      query: (slug) => `by-slug/${slug}`,
    }),
    create: builder.mutation<IProduct, { slug: string }>({
      query: ({ slug }) => ({
        url: '',
        method: 'POST',
        body: { slug },
      }),
    }),
    update: builder.mutation<IProduct, { id: string | number; name: string }>({
      query: ({ id, name }) => ({
        url: `${id}`,
        method: 'PUT',
        body: { name },
      }),
    }),
    delete: builder.mutation<IProduct, string | number>({
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
} = productApi;



