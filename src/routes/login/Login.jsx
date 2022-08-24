import React, { useState } from 'react'
import "./Login.css"
import { useDispatch} from 'react-redux'
import { log } from '../../redux/action/actionLogin'
import {useNavigate} from "react-router-dom"

function Login() {

    const dispatch=useDispatch()
    const navigate=useNavigate()

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
            navigate( "/home", {replace:true})
            // return (<Link to="/home"><Home /></Link>)
            
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div >
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
        </div>
    )
}

export default Login