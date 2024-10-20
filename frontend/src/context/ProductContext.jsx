import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [imageError, setImageError] = useState(false);



  const validateBase64Image = (base64Image) => {
    const base64Pattern = /^data:image\/(jpeg|png|gif|bmp);base64,/;
    if (base64Pattern.test(base64Image)) {
      setImageError(false);
      console.log("Image validated");
    } else {
      setImageError(true);
      console.log("Image not validated");
    }
    console.log("imageError in validateBaswe64Image set to: ", imageError);
  };

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct,
      validateBase64Image,
      imageError,
      }}>
      {children}
    </ProductContext.Provider>
  );
};