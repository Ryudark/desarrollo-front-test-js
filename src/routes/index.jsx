import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from 'react-router-dom';

import Login from '../routes/login/Login';
import Home from './home/Home';
import ContentDetails from './contentDetails/ContentDetails';
import About from './about/About';
import ContentCategory from './contentCategory/ContentCategory';

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