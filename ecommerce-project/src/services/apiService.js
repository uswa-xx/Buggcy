import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await apiClient.post('/products', product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await apiClient.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await apiClient.delete(`/products/${id}`);
  return response.data;
};
