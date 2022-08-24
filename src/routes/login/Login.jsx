import React, { useState } from 'react'
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux'
import { log } from '../../redux/action/actionLogin'
import { Link } from 'react-router-dom'
import Home from '../home/Home'

function Login() {

    const dispatch=useDispatch()

    const enter=useSelector(state=> state)

    const [login, setlogin] = useState(
        {
        user:"", 
        password:""
        })

    function handleChange(e){
        e.preventDefault()
        setlogin({...login, [e.target.name]:e.target.value})
    }
                ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    function onSubmit(e){
        e.preventDefault()
        try {
            dispatch(log(login))
            return (<Link to="/home"><Home /></Link>)
            
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='divLogin'>
        <h2>LOGIN</h2>
        <form onSubmit={onSubmit}>  
            <div>
            <input onChange={handleChange} name="user" type="email" placeholder="Usuario" value={login.user}/>
            </div>
            <div>
            <input onChange={handleChange} name="password" type="password" placeholder="password" value={login.password} />
            </div>
            <input type="submit" />
            
        </form>
        </div>
    )
}

export default Login