import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/navBar/NavBar'
import { genres, genresFilter } from '../../redux/action/actionInfo'
import { Link } from 'react-router-dom'
import './Home.css'


export default function Home (){

    const info= useSelector(state=>state?.genres)

    const avaible=useSelector(state=>state?.user)
    console.log(avaible)


    const dispatch= useDispatch()

    useEffect(()=>{          
        dispatch(genres())
    })

    function contents(genre){
        dispatch(genresFilter(genre))
    }

    // if(!avaible){
    //     return (
    //         <div>INGRESE POR FAVOR</div>
    //     )
    // }
    return (
        <div className='home'>
            <NavBar />
            <div>
                {info?.map(a=>
                    <Link className='cardPresentation'
                    to="/contentCategory"
                    onClick={()=>contents(a.name)} key={a.name}>
                    <h2 >{a.name}</h2>
                    <img src={a.img} alt={a.name}/>
                    <p >{a.info}</p>
                    </Link>
                )}
            </div>
        </div>
        )
}
