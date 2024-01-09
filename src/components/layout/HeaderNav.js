import React from 'react'
import { NavLink } from 'react-router-dom'
export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className="logo">
            <h1>{"</"}David Achoy{">"}</h1>
        </div>
        <nav>
            <ul>

                <li><NavLink to="/" className={({isActive})=> isActive ? "active-link" : ""}>Home</NavLink></li>
                <li><NavLink to="/portfolio" className={({isActive})=> isActive ? "active-link" : ""}>Portfolio</NavLink></li>
                <li><NavLink to="/services" className={({isActive})=> isActive ? "active-link" : ""}>Services</NavLink></li>
                <li><NavLink to="/curriculum" className={({isActive})=> isActive ? "active-link" : ""}>Curriculum</NavLink></li>
                <li><NavLink to="/contact" className={({isActive})=> isActive ? "active-link" : ""}>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
