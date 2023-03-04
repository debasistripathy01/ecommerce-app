import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { unstable_HistoryRouter, useHistory } from 'react-router-dom';

const Navbar = ({ onSearchChange, onSearchSubmit }) => {

    

  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/clothing">Clothing</Link>
            </li>
            <li>
                <form onSubmit={onSearchSubmit}>
                    <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </li>
        </ul>
    </nav>
  )
}

export { Navbar }