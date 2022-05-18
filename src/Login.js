import React from "react"
import './Login.css'
import {loginUrl} from './spotify'

function Login(){

    return (
        <div className="login">
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
        <form>
        <img src={require('./panda7.png')} alt="" />
        <button>
            <a href={loginUrl}>Login with Panda Music</a>
        </button>
   </form>
    </div>
    )
}

export default Login