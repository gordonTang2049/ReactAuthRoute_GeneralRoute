import React, { 
    useContext 
} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "../auth/authContext";


export const LandingPage  = () => {

    const {currentUser} = useContext(AuthContext)
    

    return(
        <>
        <h1>This is Landing Page</h1>
        <h2>{ currentUser && JSON.stringify(currentUser, null, 2)}</h2>
        <img src="https://media.giphy.com/media/zyUwS7hgbdZx6/giphy.gif" alt=""/>    

        <div>
        <Link to="/about">About</Link>


        </div>

        </>
    )
}

