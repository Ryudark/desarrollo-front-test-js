import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { genres, genresFilter } from '../../redux/action/actionInfo'
import './NavBar.css'

export default function NavBar() {

  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      
    </div>
  )
}