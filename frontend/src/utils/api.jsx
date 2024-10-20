
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    return response.data._embedded.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

