import React, { 
    useContext 
} from "react";
import {AuthContext} from "../auth/authContext";


export const Profile = () => {

    const {currentUser} = useContext(AuthContext)
    
    


    return(
        <>
        <h1>This is Landing Page</h1>
        <h2>{currentUser && JSON.stringify(currentUser, null, 2)}</h2>
        <img src="https://media.giphy.com/media/3o6ZtliNt8e3fVnj44/giphy.gif" alt=""/>
        </>
    )
}

 