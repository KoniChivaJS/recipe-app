import { ApiRoutes } from "../constants";
import { axiosInstance } from "../instance";

export const getRecipes = async (paramsOptions?: any) => {
  const { data } = await axiosInstance.get(ApiRoutes.GET_ALL, {
    params: paramsOptions,
  });
  return data;
};

export const getRecipeById = async (id: string) => {
  const { data } = await axiosInstance.get(ApiRoutes.GET_ALL + id);
  return data;
};
