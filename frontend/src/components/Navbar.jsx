import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <header>
            <div className='container'>
                <div className='logo-brand'>
                    <a href=''>Ankit..AJ..</a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/About'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Register'>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Login'>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar
