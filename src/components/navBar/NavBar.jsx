import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import House from "../../images/1_-_Home_256x256_35385.png"

export default function NavBar() {

  return (
    <div className='navbar'>
      <div>
        <Link to="/home" >{House}</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      
    </div>
  )
}