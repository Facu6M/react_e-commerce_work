import React, { useContext, useState } from "react";
import styles from "../styles/Products.css";
import { Apicontext } from "../Context/ContextApi";
import { Link, to } from "react-router-dom";
import { createContext } from "react";


const ProductsJacket = ( {
  actualProduct,
  setActualProduct,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal
}) => {

  const productos = useContext(Apicontext)

const onAddProduct = producto =>{

  setCountProducts(countProducts + 1)
  console.log(countProducts)

  if(allProducts.find(item => item.id === producto.id)){

    const products = allProducts.map(item =>
      item.id === producto.id
      ? {...item, quantity: item.quantity + 1 }
      :item
      );

      setTotal(total + producto.price * producto.quantity)
      setCountProducts(countProducts + producto.quantity)
      return setAllProducts([...products])

  }

  setTotal(total + producto.price * producto.quantity)
  setCountProducts(countProducts + producto.quantity)
  setAllProducts([...allProducts, producto])
}

const putActualProduct = producto =>{
  setActualProduct([producto])
}





  return (
    <>


    <h1>Here are all the JACKETS available</h1>
    <main>
{
  productos.map(producto => (

    <div key={producto.id} className="card_container">
    <div className="card" >
      <div className="img" onClick={() => putActualProduct(producto)}>
      <Link to="/ProductsDetails">
        <img
          id="imagen"
          src="https://facu6m.github.io/card/images/image-product-desktop.jpg"
          alt=""
        ></img>
 </Link>
      </div>


      <p>{producto.name}</p>

      <div className="price">
        <p className="left">${producto.price}</p>
        <p className="right">$169.69</p>
      </div>

      <button onClick={() => onAddProduct(producto)} >
        <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png"></img>
        ADD TO CART
      </button>
      </div>
  </div>
  ))
}



    </main>
</>
  )
}

export default ProductsJacket