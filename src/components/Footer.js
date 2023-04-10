import React from 'react'
import styles from "../styles/Footer.css";
import { Link, to } from 'react-router-dom';

const Footer = () => {
  return (

    <footer>
    <div className="footer-container">
        <div className="footer-content-container">
            <h3 className="website-logo">DressDash</h3>
            <span className="footer-info">+54 11  5145-1631</span>
            <span className="footer-info">facu6p@gmail.com</span>
        </div>
        <div className="footer-menus">
            <div className="footer-content-container">
                <span className="menu-title">HOME</span>

                <Link to="/Products" className="menu-item-footer">Products</Link>
                <Link to="/AboutUS" className="menu-item-footer">About US</Link>
                <Link to="/Contact" className="menu-item-footer">Contact</Link>
            </div>
            <div className="footer-content-container">
                <span className="menu-title">legal</span>
                <a href="" className="menu-item-footer">Privacy Policy</a>
                <a href="" className="menu-item-footer">Cookies</a>
                <a href="" className="menu-item-footer">Legal Advice</a>
            </div>
        </div>

        <div className="footer-content-container">
            <span className="menu-title">Follow us</span>
            <a href="" className="menu-item-footer">Facebook</a>
            <a href="" className="menu-item-footer">Instagram</a>
            <a href="" className="menu-item-footer">Twitter</a>
        </div>
    </div>
    <div className="copyright-container">
        <span className="copyright">Copyright 2023, facundo.com. All rights reserved.</span>
    </div>
</footer>



  )
}

export default Footer