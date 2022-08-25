import React from 'react';
import Login from '../routes/login/Login';
import {Route, Routes} from "react-router-dom";
import Home from './home/Home';
import ContentDetails from './contentDetails/ContentDetails';
import About from './about/About';
import ContentCategory from './contentCategory/ContentCategory';
import {Navigate} from 'react-router-dom';

export default function Index() {
    return (
        
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/contentCategory' element={<ContentCategory />}/>
            <Route path='/contentDetails/:id' element={<ContentDetails />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
        
    )
}