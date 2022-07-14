import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="navBarContainer">
        <p className='navLeft'>
          OCTAViSiON
        </p>
        <form className="navCenter">
          <input className="" type="search" placeholder=" Search..." />
          <button className="" type="submit">Search</button>
        </form>
        <div className="navRight">
          <p onClick={() => navigate('/')}>HOME</p>
          <p onClick={() => navigate('/services')}>SERVICES</p>
          <p onClick={() => navigate('/about')}>ABOUT</p>
        </div>
        <i className='fas fa-bars' id='btn'></i>
    </nav>
  )
}  

export default NavBar;
