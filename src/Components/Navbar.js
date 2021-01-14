import React from 'react'
import {NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/home" className="link" activeClassName="active-link">
              <i className="fas fa-home"></i>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="link" activeClassName="active-link">
              <i className="fas fa-shopping-cart"></i>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    )

}