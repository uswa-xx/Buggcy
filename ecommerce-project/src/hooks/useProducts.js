import useSWR from 'swr';
import { fetchProducts } from '../services/apiService';

export const useProducts = () => {
  const { data, error } = useSWR('products', fetchProducts);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  };
};