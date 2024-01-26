
import { ICategory } from "@/store/types/category.interface";
import axios from "axios";

export const CategoryService = (() => {
  const URL = process.env.SERVER_URL;

  return {
    async getAll() {
      return axios.get<ICategory[]>(`${URL}/categories?public=photos`);
    },

    async getById(id: string | number) {
      return axios.get<ICategory>(`${URL}/${id}`);
        },

    async getBySlug(slug: string) {
      return axios.get<ICategory>( `${URL}/by-slug/${slug}`
      );
    },

    async create(slug: string) {
      return axios.post<ICategory>(`${URL}`);
    },

    async update(id: string | number, name: string) {
      return axios.put<ICategory>(`${URL}/${id}`);
        },

    async delete(id: string | number) {
      return axios.delete<ICategory>(`${URL}/${id}`);
       },
  };
})();




  

