import React, { 
    useContext 
} from "react";
import {AuthContext} from "../auth/authContext";


export const StaffDetail = () => {

    const {currentUser} = useContext(AuthContext)
    
    

    return(
        <>
        <h1>This is StaffDetail Page</h1>
        <h2>{currentUser && JSON.stringify(currentUser, null, 2)}</h2>
        <img src="https://media.giphy.com/media/3o6ZsW1Ih3LPABas7u/giphy.gif" alt=""/>
        </>
    )
}

