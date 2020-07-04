import {loginDb} from './logindb'

const auth = {
    isAuthUser : false,
    signIn : (userInput, password) => {

        const userDb = loginDb()

        const isUserExist = (user) => { 
            return user.email === userInput 
        }

        
        auth.isAuthUser = userDb.find(isUserExist)  

        return (!!auth.isAuthUser && auth.isAuthUser.password === password) ? auth.isAuthUser : false 
    },
    signOut : () => {
        auth.isAuthUser = false
    }

}

export default auth

