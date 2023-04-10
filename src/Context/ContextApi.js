import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const Apicontext = createContext();

const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [actualId, setActualID] = useState([]);

  const one = 1

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
   .then(json => setProducts(json))


}, [])


  products.map(
  producto => {
    producto["quantity"] = 1
    producto["price"] = 32
  }
  )



  return <Apicontext.Provider value={products}>
    {children}
    </Apicontext.Provider>;
};

export default ContextApi;
