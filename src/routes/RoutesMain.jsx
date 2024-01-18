import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/index"
import { RegisterPage } from "../pages/RegisterPage/index"
import { DashboardPage } from "../pages/DashboardPage/index"
import { useState, useEffect } from "react"

export const RouteMain = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("@TOKEN", JSON.stringify(token));
     }, [user, token] );

    useEffect(() => {
        if (user && token) {
            navigate('/dashboard');
        }
    }, [user, token]);
    
    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} setToken={setToken} />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashboardPage user={user} />}/>
        </Routes>
    )
}