import { createContext, useContext, useState, useEffect } from "react";

 const AuthContext = createContext();

 const AuthProvider = ({ children }) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };
   
    let isLoggedIn = !!token;

    console.log("is LogedIn",isLoggedIn);
    // tackling the logout functionality

    const LogoutUser = () => { 
        setToken("");
        return localStorage.removeItem("token");
    };
        // return localStorage.removeItem("token");

    return(
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser,}}>
            {children}
        </AuthContext.Provider>
    );
};

 const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};

export { AuthContext, AuthProvider, useAuth };