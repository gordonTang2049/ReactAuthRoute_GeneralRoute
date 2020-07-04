import React ,{
    useState, 
    useMemo, 
    createContext
} from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    
    const [currentUser, setCurrentUser] = useState(false)
    const userProvider = useMemo(() => ({currentUser, setCurrentUser}), [currentUser, setCurrentUser])



    return (
        <AuthContext.Provider 
            value={userProvider}
        >
            {children}
        </AuthContext.Provider>

    );
}


