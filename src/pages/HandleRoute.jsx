import React from 'react'
import About from './About';
import Home from './Home';
import Service from './Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import './HandleRoute.css'

const HandleRoute = () => {
  return (
      <Router>
        <NavBar />
        <div className='routeNavItem'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/services' element={ <Service /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </div>
      </Router>
  )
}

export default HandleRoute;