import React, { 
    useContext 
} from "react";



export const StaffDetail = () => {

    const {user} = useContext(UserContext)
    
    

    return(
        <>
        <h1>This is StaffDetail Page</h1>
        <h2>{JSON.stringify(user, null, 2)}</h2>
        <img src="https://media.giphy.com/media/3o6ZsW1Ih3LPABas7u/giphy.gif" alt=""/>
        </>
    )
}

