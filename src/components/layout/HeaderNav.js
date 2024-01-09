import React from 'react'
import { NavLink } from 'react-router-dom'
export const HeaderNav = () => {
  return (
    <header>
        <div className="logo">
            <h1>{"</"}David Achoy{">"}</h1>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/curriculum">Curriculum</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
