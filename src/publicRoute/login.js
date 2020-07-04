import React, {
     useState, 
     useContext,
     useRef,
     useEffect
} from 'react';

import {
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import { AuthContext } from '../auth/authContext'
import auth from '../auth/authFn'

export const Login = () =>{

    // the entire browser history
    const history = useHistory()
    // current location
    const location = useLocation()  

    const {currentUser, setCurrentUser} = useContext(AuthContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [authWarning, setAuthWarning] = useState(false)
    const [inputEmptyWarning, setInputEmptyWarning] = useState(false)
    const [userInput, setUserInput] = useState({
                email : null,
                password: null
    })

    const usernameInputRef = useRef('')
    const passwordInputRef = useRef('')

    useEffect(()=>{
        console.log("rendered")
    if(userInput.email && userInput.password){

        const isAuth = auth.signIn(userInput.email, userInput.password)

        if(isAuth){
            console.log(isAuth)
            
            setCurrentUser(isAuth)
            history.replace("/profile");


        }else{

            console.log('logic issues')
            setAuthWarning(true)

        }  
    }else{
        
        console.log("Set empty")
        setInputEmptyWarning(true)

    }
     
    return () => {

            
        
        // Set timing on state changes 
        // => induce time to component unmount
    
            setTimeout(()=>{
        // Because the state reset,
        // so the other warning was disappear abprutly
                setAuthWarning(false)
                setInputEmptyWarning(false)
                setIsSubmitted(false)

            }, 3000)
            
            // watch Ben awad for the solution, he is using useRef to control DOM
            // Because the SetTime block the immediate umount
            
            // ==================================================================
            // index.js:1 Warning: Can't perform a React state update on an unmounted component. 
            // This is a no-op, but it indicates a memory leak in your application. 
            // To fix, cancel all subscriptions 
            // and asynchronous tasks in a useEffect cleanup function.
            // in Login (created by Context.Consumer)
            // in Route (at routerTest.js:81)
            // ==================================================================

            // use other useEffect to and set up if statement to unmount it
    }   

    },[userInput])

    const handleSubmit = (e) => {
        
        e.preventDefault()

        const username = usernameInputRef.current.value
        const password = passwordInputRef.current.value

        setUserInput({
            email : username,
            password: password
        })

        console.log("setIsSubmitted")

        setIsSubmitted(true)
    }


    // setUserInput(prevState => {
    // return {...prevState, email: val}
    // })
    // }

    // const handlePasswordChange = (e) => {
    // // retain other props in this object state
    // const val = e.target.value

    // setUserInput(prevState => {
    // return {...prevState, password: val}
    // })
    // }

    // if (currentUser) {
    //     return <Redirect to="/" />;
    // }

return (
        <div>
                <h4>User Input is {JSON.stringify(userInput, null, 2)} </h4>

                <h4>AuthContext is {JSON.stringify(currentUser, null, 2)}</h4>

                <h1>Log in</h1>

                <h2>isSubmitted status : {isSubmitted.toString()}</h2>
                <h2>empty status : {inputEmptyWarning.toString()}</h2>

                {/* I can use useRef to control the pre tag Dom ======*/}
                {isSubmitted && inputEmptyWarning ? <pre style={{fontSize: 14, color : '#e27a33' }}>Warning : Either your username or password is empty </pre>:<></>}

                <h2>Warning status : {authWarning.toString()}</h2>
                {authWarning && <pre style={{fontSize: 14, color : '#e27a33' }}>Warning : Your username or password is incorrect </pre>}
                
                <div
                        style={{

                            display : 'flex', 
                            flexDirection: 'column',
                            
                            }}
                >
                        <form onSubmit={handleSubmit} 
                            style={{

                                    
                                    display : 'flex', 
                                    flexDirection: 'column',
                                    // justifyContent : 'center',
                                    // alignContent : 'center',
                                    // alignItem : 'center',
                                    alignSelf : 'center'
                                    }}
                        >
                            
                        {/* value={userInput.email} */}
                        {/* onChange={handlePasswordChange} */}
                        {/* type="password" */}
                        {/* type="submit" */}

                            <input 

                                ref={usernameInputRef} 
                                name="email"  
                                placeholder="Email" 
                                
                                style={{ 
                                    
                                    width : '20rem',
                                    // justifyContent : 'center',
                                    // alignContent : 'center',
                                    // alignItem : 'center'
                                    
                                    }}
                            />
                            

                        <input 
                            
                            ref={passwordInputRef} 
                            name="password"  
                            placeholder="Password" 
                            // type="password"
                            style={{ 
                                
                                width : '20rem',
                                // justifyContent : 'center',
                                // alignContent : 'center',
                                // alignItem : 'center'
                                }}
                        />
                        
                        <button style={{ 
                                
                                width : '10rem',
                                alignSelf : 'center'

                                // justifyContent : 'center',
                                // alignContent : 'center',
                                // alignItem : 'center'

                                }}>Log in</button>
                        </form>
                </div>
        </div>
);
}


 
