import './App.css';
// api
import ContextApi from './Context/ContextApi';
// header
import Header from './components/Header';
// sections
import Home from "./components/Home"
import Products from './components/Products';
// Products
import Products_Jacket from './components/Products_Jacket';
import Products_Pants from './components/Products_Pants';
import Products_Sneakers from './components/Products_Sneakers';
import AboutUS from './components/About';
import Contact from './components/Contact';
// footer
import Footer from "./components/Footer"
// react-router-dom
import {BrowserRouter, Routes, Route, Link, To} from "react-router-dom";
import ProductsDetails from './components/ProductsDetails';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';



function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [actualProduct, setActualProduct] = useState([]);

  return (
    <div className="App">
<div className='img_background'>

<BrowserRouter>
< Header
allProducts={allProducts}
setAllProducts={setAllProducts}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>

<ContextApi>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/react_e-commerce_work" element={<Home />}></Route>
  <Route path="/Products" element={<Products/>}></Route>

  <Route path="/Products_Jacket" element={<Products_Jacket
  actualProduct={actualProduct}
  setActualProduct={setActualProduct}
  allProducts={allProducts}
  setAllProducts={setAllProducts}
  total={total}
  setTotal={setTotal}
  countProducts={countProducts}
  setCountProducts={setCountProducts}/>}></Route>

<Route path="/Products_Sneakers" element={<Products_Sneakers
  actualProduct={actualProduct}
  setActualProduct={setActualProduct}
  allProducts={allProducts}
  setAllProducts={setAllProducts}
  total={total}
  setTotal={setTotal}
  countProducts={countProducts}
  setCountProducts={setCountProducts}/>}></Route>

<Route path="/Products_Pants" element={<Products_Pants
  actualProduct={actualProduct}
  setActualProduct={setActualProduct}
  allProducts={allProducts}
  setAllProducts={setAllProducts}
  total={total}
  setTotal={setTotal}
  countProducts={countProducts}
  setCountProducts={setCountProducts}/>}></Route>

  <Route path="/ProductsDetails" element={<ProductsDetails
  actualProduct={actualProduct}
  setActualProduct={setActualProduct}
  allProducts={allProducts}
  setAllProducts={setAllProducts}
  total={total}
  setTotal={setTotal}
  countProducts={countProducts}
  setCountProducts={setCountProducts}/>}></Route>

  <Route path="/Contact" element={<Contact />}></Route>
  <Route path="/AboutUS" element={<AboutUS />}></Route>
</Routes>
</ContextApi>

<Footer/>
</BrowserRouter>

</div>

    </div>
  );
}

export default App;


