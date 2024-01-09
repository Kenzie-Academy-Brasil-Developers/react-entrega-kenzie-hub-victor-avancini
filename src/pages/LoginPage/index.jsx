import { LoginForm } from "../../components/forms/LoginForm/index"
import styles from "./style.module.scss"
import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const LoginPage = ({ setUser, setToken }) => {
    const navigate = useNavigate();

    const registerButtonClick = () => {
        navigate('/register')
    }

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData);
            setUser(data.user)
            setToken(data.token)
        } catch (error) {
            console.error("Erro no login:", error);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <img src={Logo} alt="Logo Kenzie Academy" />
            <div className={styles.loginContent}>
                <h1>Login</h1>
                <LoginForm userLogin={userLogin} />
                <div className={styles.registerLogin}>
                    <p>Ainda não possui uma conta?</p>
                    <button onClick={registerButtonClick}>Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}