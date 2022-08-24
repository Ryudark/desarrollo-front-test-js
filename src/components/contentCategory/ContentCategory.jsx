import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { genresFilter } from '../../redux/action/actionInfo';
import ContentSimple from '../contentSimple/ContentSimple';

export default function ContentCategory(genre) {

    console.log(genre.items)
    const filter=genre.items
    
    const dispatch= useDispatch()

    const data= useSelector(state=>state.genresFilter)

    // useEffect(()=>{
    //     function genres(name){
    //         dispatch(genresFilter(name))
    //     }
    //     genres() 
    // })
    // console.log(data?.genresFilter)

    return (
        <div>
            {filter.map(a=><ContentSimple key={a.id} a={a}/>)}
        </div>
    )
}
