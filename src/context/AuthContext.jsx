import { createContext, useContext, useState } from "react";
import { loginUser } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children}) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(
        () => sessionStorage.getItem("accessToken")
    );

    const isAuthenticated = Boolean(accessToken);

    async function login(email, password) {
        const result = await loginUser(email, password);

        sessionStorage.setItem("accessToken", result.accessToken);

        setAccessToken(result.accessToken);
        setUser(result.user);

        return result.user;
    }

    function logout() {
        sessionStorage.removeItem("accessToken");

        setAccessToken(null);
        setUser(null);
    }

    const value = {
        user,
        accessToken,
        isAuthenticated,
        login,
        logout
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}