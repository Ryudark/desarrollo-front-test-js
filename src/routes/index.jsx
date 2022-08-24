import React from 'react'
import Login from '../routes/login/Login'
import {Route, Routes} from "react-router-dom"
import Home from './home/Home'
import ContentDetails from '../components/contentDetails/ContentDetails'
import About from '../components/about/About'
import ContentCategory from '../components/contentCategory/ContentCategory'

export default function Index() {
    return (
        
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/contentCategory' element={<ContentCategory />}/>
            <Route path='/contentDetails/:id' element={<ContentDetails />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        
    )
}