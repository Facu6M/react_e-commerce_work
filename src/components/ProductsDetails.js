import React, { useContext, useState } from "react";
import ProductsJacket from "./Products_Jacket";
import { productoContexto } from "./Products_Jacket";
import Header from "./Header";
import styles from "../styles/Products.css";

const ProductsDetails = ({
  actualProduct,
  setActualProduct,
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {


const [quantit,setQuantity] = useState()

function valor(e){
  actualProduct.map(producto => {
  e.preventDefault()
  console.log(quantit)
  producto["quantity"] = parseInt(quantit)
  })
}



  const onAddProduct = productoActual =>{

    setCountProducts(countProducts + productoActual.quantity)

    if(allProducts.find(item => item.id === productoActual.id)){

      const products = allProducts.map(item =>
         item.id === productoActual.id ?
        {...item, quantity : item.quantity + parseInt(quantit) }
        :item
        );


        setTotal(total + productoActual.price * parseInt(quantit))
        setCountProducts(countProducts + parseInt(quantit))
        return setAllProducts([...products])
    }

    setTotal(total + productoActual.price * parseInt(quantit) )
    setCountProducts(countProducts + parseInt(quantit))
    setAllProducts([...allProducts, productoActual])
  }

  const putActualProduct = productoActual =>{
    setActualProduct([productoActual])
  }

  return (
    <>
    {
      actualProduct.map( productoActual => (
      <main>
        <div key={productoActual.id} className="card_container">
          <div className="card">
            <div className="img">
              <img
                id="imagen"
                src="https://facu6m.github.io/card/images/image-product-desktop.jpg"
                alt=""
              ></img>
            </div>

            <p>{productoActual.name}</p>
            <h2>
  Details:
  </h2>
  <p>{productoActual.email}</p>
  <p>{productoActual.phone}</p>

            <div className="price">
              <p className="left">{productoActual.price}</p>
              <p className="right">$169.69</p>
            </div>

<form className="form_container" onSubmit={
        (e) => {
   valor(e)
        }}>
<div >
            <button onClick={() => onAddProduct(productoActual)}>
              <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png"></img>
              ADD TO CART
            </button>
     </div>
     <input onChange={(e) => setQuantity(e.target.value)} placeholder="Choose the quantity" type="number"></input>
        </form>
          </div>
        </div>
      </main>
 ))
}
    </>
  );
};

export default ProductsDetails;
