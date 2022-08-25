import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {

  return (
    <div className='navbar'>
      <div>
        <Link to="/home" >Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      
    </div>
  )
}