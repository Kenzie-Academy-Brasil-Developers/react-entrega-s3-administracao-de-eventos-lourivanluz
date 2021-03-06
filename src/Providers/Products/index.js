import { createContext, useEffect, useState } from "react";
import { api } from "./../../services/api";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
