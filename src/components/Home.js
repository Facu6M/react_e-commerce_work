import React from 'react'
import styles from "../styles/Home.css";

const AboutUS = () => {
  return (
<>

<main className='main-container'>
    <section className="content">

    <article className="gallery">
      <div className="gallery__image-container">
        <img className="gallery__previous" src="./images/icon-previous.svg"></img>
        <img className="gallery__next" src="./images/icon-next.svg"></img>
      </div>
      <div className="gallery_thumnails">
        <img src="https://cdnx.jumpseller.com/vb-collection/image/18658367/thumb/405/540?1656436914" className="gallery__thumnail" id="1"></img>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-633461828-1551791074.jpg?crop=0.700xw:1.00xh;0.144xw,0&resize=640:*" className="gallery__thumnail" id="2"></img>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47949574-55d8-4c51-a3da-f98bf776c84d/fc-barcelona-awf-chaqueta-de-futbol-WCrfLk.png" className="gallery__thumnail" id="foto"></img>
        <img src="https://os2o.com/4176-home_default/nebulae-850fp-hydro-repellent-jacket-woman.webp" className="gallery__thumnail" id="4"></img>
      </div>
    </article>

    <article className="details">
      <h2 className="details__company">DressDASH</h2>

      <h2 className="details__title">The best clothes in the country</h2>

      <p className="details__description"> This is a cloth store where you can find all kinds of clothes, from sports to the most elegant on the market.
</p>

    </article>
  </section>







      {/* <!-- Inicio cart modal -->  */}
<div className="cart-modal" id="cart">
<p className="cart-modal__title">Cart</p>
<div className="cart-modal__checkout-container">
<div className="cart-modal__details-container">
<img className="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt=""></img>
<div>
<p className="cart-modal__product">Autumn Limited Edition</p>
<p className="cart-modal__price">$125 x 3 <span className="alt">$375.00</span></p>
</div>
<img className="cart-modal__delete" src="./images/icon-delete.svg" alt=""></img>
</div>
<button className="cart-modal__deletee">Checkout</button>
</div>
</div>
{/* <!-- Fin cart modal -->  */}
</main>
  </>
  )
}

export default AboutUS;