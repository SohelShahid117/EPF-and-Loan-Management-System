import React, { createContext, useContext, useState } from 'react';

const userContext = createContext()

const AuthContext = ({children}) => {
    const [user,setUser]=useState(null)
    const loginUser=(user)=>{
        setUser(user)
    }
    const logOutUser = () =>{
        setUser(null)
        localStorage.removeItem("token")
    }
    return (
        <userContext.Provider value={{user,loginUser,logOutUser}}>
            {children}
        </userContext.Provider>
    );
};

export const useAuth = () =>useContext(userContext);
export default AuthContext;