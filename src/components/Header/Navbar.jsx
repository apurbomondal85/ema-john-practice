

import React from 'react'
import "./navbar.css"
import logo from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <header>
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <div className='menu'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
