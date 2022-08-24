import React from 'react'
import { useSelector } from 'react-redux';
import ContentSimple from '../contentSimple/ContentSimple';
import NavBar from '../navBar/NavBar';
import './ContentCategory.css'

export default function ContentCategory() {

    // const filter=genre.items
    const filter= useSelector(state=>state.genresFilter)

    console.log(filter)
    return (
        <div className='fondo'>
            <NavBar />
            {filter.map(a=><ContentSimple key={a.id} a={a}/>)}
        </div>
    )
}
