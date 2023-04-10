import React, { useContext, useState } from "react";
import styles from "../styles/Products.css";
import { Apicontext } from "../Context/ContextApi";
import { Link, to } from "react-router-dom";
import { createContext } from "react";
import { type } from "@testing-library/user-event/dist/type";


const Products = ( {
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

let [arrayy, setArrayy] = useState([])

const [word, setWord] = useState("")

const arrayVacio = []

function busquedaProductos(e){
     const busqueda = e.target.value
     if(busqueda.length == 0){
      console.log("put something")
      setArrayy([])
     } else {
     const arrayCopia = [...productos]
     const palabra = arrayCopia.filter(p => p.name.includes(busqueda))
     setArrayy(palabra)
     console.log(busqueda.length)

     }
}

console.log(arrayy)


  return (
    <>


    <h1>Here you have all the CLOTHES available</h1>

    <form onChange={busquedaProductos}>
    <input placeholder='search the clothes'></input>
    </form>

    <main>
{
  arrayy.length ?
  arrayy.map(producto => (

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


      </div>
  </div>
  ))
  :
  <h3>Put a name that matches any item</h3>
}



    </main>
</>
  )
}

export default Products