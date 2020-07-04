import React, { 
    useContext 
} from "react";



export const LandingPage  = () => {

    const {user} = useContext(UserContext)
    

    return(
        <>
        <h1>This is Landing Page</h1>
        <h2>{JSON.stringify(user, null, 2)}</h2>
        <img src="https://media.giphy.com/media/zyUwS7hgbdZx6/giphy.gif" alt=""/>    
        </>
    )
}

