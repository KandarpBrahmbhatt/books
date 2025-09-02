import React from 'react'
import {Link} from 'react-router-dom'
import "../Navbar/Navbar.css"

import { useSelector } from 'react-redux';
const Navbar = () => {

  const cartItems = useSelector(state => state.cart.cart);
  return (
    <>
      <div className="navbar">
        <div className="logo">
            e-cart
        </div>
        <ul>
            {/* <a href="">Login</a> */}
            <Link to="/">Login</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Add to Card <small>{cartItems.length}</small> </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
