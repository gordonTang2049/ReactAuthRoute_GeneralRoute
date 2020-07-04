import React, {
     useState, 
     useContext,
     useRef
} from 'react';

import {
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import { UserContext } from './AuthSess/authContext'
import auth from './AuthSess/authFn'

const Login = () =>{

    const {user, setUser} = useContext(UserContext)
    const [userInput, setUserInput] = useState({email : null, password: null})



const history = useHistory()
const location = useLocation()  

const { from } = location.state || { from: { pathname: "/" } };

const handleLogin = (event) => {

event.preventDefault();

const isAuth = auth.signIn(userInput.email, userInput.password)  

if(!!isAuth){

console.log(from)
setUser(isAuth)
// =============================================================
// WHy do I need to use push
history.replace(from);
// =========================================================

}else{
console.log(`${isAuth} not working`)      
}

}

const handleEmailChange = (e) => {
// retain other props in this object state
const val = e.target.value

setUserInput(prevState => {
return {...prevState, email: val}
})
}

const handlePasswordChange = (e) => {
// retain other props in this object state
const val = e.target.value

setUserInput(prevState => {
return {...prevState, password: val}
})
}

if (user) {
return <Redirect to="/" />;
}

return (
<div>
<h4>Auth is {JSON.stringify(userInput, null, 2)} </h4>
<h4>User Context {JSON.stringify(user, null, 2)}</h4>
<h1>Log in</h1>
<form onSubmit={handleLogin}>
<label>
Email
<input onChange={handleEmailChange}  name="email"  placeholder="Email" value={userInput.email}/>
</label>
<label>
Password
<input onChange={handlePasswordChange} type="password" name="password"  placeholder="Password" value={userInput.password}/>
</label>
<button type="submit">Log in</button>
</form>
</div>
);
}

// type="email"   
export default Login
