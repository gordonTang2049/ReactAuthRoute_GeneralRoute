import React, { 
    useContext 
} from "react";



export const Profile = () => {

    const {user} = useContext(UserContext)
    
    


    return(
        <>
        <h1>This is Landing Page</h1>
        <h2>{JSON.stringify(user, null, 2)}</h2>
        <img src="https://media.giphy.com/media/3o6ZtliNt8e3fVnj44/giphy.gif" alt=""/>
        </>
    )
}

 