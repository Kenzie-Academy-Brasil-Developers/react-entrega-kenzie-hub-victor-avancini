import { LoginForm } from "../../components/forms/LoginForm/index"
import styles from "./style.module.scss"
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className={styles.loginContainer}>
            <img src={Logo} alt="Logo Kenzie Academy" />
            <div className={styles.loginContent}>
                <h1>Login</h1>
                <LoginForm />
                <div className={styles.registerLogin}>
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register" className={styles.button}>Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}