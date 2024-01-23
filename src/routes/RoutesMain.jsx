import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/index"
import { RegisterPage } from "../pages/RegisterPage/index"
import { DashboardPage } from "../pages/DashboardPage/index"
import { useUserContext } from "../providers/UserContext"
import { TechProvider } from "../providers/TechContext"

export const RouteMain = () => {
    const { user } = useUserContext();

    const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<TechProvider><DashboardPage user={user} /></TechProvider>} />
        </Routes>
    )
}