import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getCategories = async () => {
  const url = "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5";
  return fetchData(url);
};

export const getProducts = async (categoryId) => {
  const url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  
  await new Promise((resolve) => setTimeout(resolve));
  return fetchData(url);
};

export const getPagination = async (offset) => {
  const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=5`;
  return fetchData(url);
};

export const getSearch = async (searchTerm) => {
  const url = `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`;
  return fetchData(url);
};

export const getUsers = async () => {
  const url = `https://api.escuelajs.co/api/v1/users`;
  return fetchData(url);
};
