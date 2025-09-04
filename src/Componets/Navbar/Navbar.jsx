import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Navbar/Navbar.css"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("keeplogedIn")) || false;
  const cartItems = useSelector(state => state.cart.cart);
  const navigate = useNavigate();

  const handleAuthClick = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      
      localStorage.setItem("keeplogedIn", JSON.stringify(false));
      navigate("/product");
      window.location.reload(); // Optional: reload to update UI
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
            e-cart
        </div>
        <ul>
            <Link to="/product" onClick={handleAuthClick}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Add to Card <small>{cartItems.length}</small> </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar