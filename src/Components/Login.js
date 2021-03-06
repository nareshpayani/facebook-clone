import React from 'react';
import "../Css/Login.css"
import logo from "../Images/logo.png"
import { Button } from '@material-ui/core'
import { auth, provider} from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'



function Login() {

    //Google Authentication function

    const [state, dispatch] = useStateValue()

    const signIn = (e) => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message)
        }) 
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="" />
                <h1>Sign in to Facebook</h1>
                <p>Developed by Naresh Payani</p>
                <Button onClick={signIn}> SignIn with Google</Button>
            </div>
    </div>
    )
}

export default Login
