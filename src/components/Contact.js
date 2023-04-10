import React from 'react'
import styles from "../styles/Contact.css";

const Contact = () => {
  return (

    <article >
    <h1>TreeDASH</h1>

    <h2>If you want to contact with us complete the following steps:</h2>
<form>
    <input placeholder='name'></input>
    <input placeholder='email'></input>
    <textarea placeholder='what do you want to ask us ?'/>
    <button>Send</button>
</form>
  </article>
  )
}

export default Contact