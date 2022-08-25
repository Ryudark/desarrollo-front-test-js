import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

import ContentSimple from '../../components/contentSimple/ContentSimple';
import NavBar from '../../components/navBar/NavBar';
import './ContentCategory.css';

export default function ContentCategory() {

    const isLoged=useSelector(state=>state.user)

    const navigate=useNavigate()

    const filter= useSelector(state=>state.genresFilter)
    
    useEffect(()=>{
        // console.log("first")
        if(!isLoged){
            navigate( "/login", {replace:true})
        }
    })

    

    return (
        <div className='fondo'>
            <NavBar />
            {filter.map(a=><ContentSimple key={a.id} a={a}/>)}
        </div>
    )
}
