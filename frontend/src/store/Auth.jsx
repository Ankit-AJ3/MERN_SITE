import { createContext, useContext, useState, useEffect } from "react";

 const AuthContext = createContext();

 const AuthProvider = ({ children }) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

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

    // JWT AUTHENTICATION  - to get the currently loggedIN user data

    const userAuthentication = async() => {
        try {
            const response = await fetch("https://localhost:3200/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("User data", data);
                setUser(data);
            }

        } catch (error) {
            console.log("Error fetching user data")
        }
    }

    useEffect(() =>{
        userAuthentication();
    },[]);

    return(
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user}}>
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