import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentCategory from '../../components/contentCategory/ContentCategory'
import NavBar from '../../components/navBar/NavBar'
import { genres, genresFilter } from '../../redux/action/actionInfo'

export default function Home (){

    const info= useSelector(state=>state?.genres)
    const filter= useSelector(state=>state?.genresFilter)
    const dispatch= useDispatch()

    const gen=info

    const fil=filter?.movie

    console.log(filter)
    // const filter=info?.genresFilter.movies
    // console.log(filter)

    useEffect(()=>{          
            dispatch(genres())
    },[])

    function contents(genre){
        dispatch(genresFilter(genre))
    }

    return (
    <div>
        <div>
        <NavBar />
        </div>
        <div>
            {gen?.map(a=> <button onClick={()=>contents(a.name)} key={a.name}>{a.name}</button>)}
        </div>
        <div>
            {filter? <ContentCategory items={filter}/>:<div></div>}
        </div>
    </div>
    )
}
