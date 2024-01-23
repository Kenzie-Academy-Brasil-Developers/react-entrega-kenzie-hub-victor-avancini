import { Link, useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm/index"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss";

export const RegisterPage = () => {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <img src={Logo} alt="Logo Kenzie Academy" />
                <Link to={"/"} className={styles.button}>Voltar</Link>
            </div>
            <div className={styles.registerContent}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <RegisterForm/>
            </div>
        </div>
    )
}