import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <section className="header">
        <NavLink href="#" className="logo"> </NavLink>

        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

    </section>
    </div>
  )
}

export default Navbar