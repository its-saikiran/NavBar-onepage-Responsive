import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResNavBar = () => {

    const navigate = useNavigate()

  return (
    <div className="resNavBarContainer">
        <p onClick={() => navigate('/')}>HOME</p>
        <p onClick={() => navigate('/service')}>SERVICE</p>
        <p onClick={() => navigate('/about')}>ABOUT</p>
    </div>
  )
}

export default ResNavBar