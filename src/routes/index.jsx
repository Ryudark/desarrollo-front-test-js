import React from 'react'
import Login from '../routes/login/Login'
import {Route, Routes} from "react-router-dom"
import Home from './home/Home'
import ContentCategory from '../components/contentCategory/ContentCategory'
import ContentDetails from '../components/contentDetails/ContentDetails'

export default function Index() {
    return (
        
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/contentDetails/:id' element={<ContentDetails />}/>
        </Routes>
        
    )
}