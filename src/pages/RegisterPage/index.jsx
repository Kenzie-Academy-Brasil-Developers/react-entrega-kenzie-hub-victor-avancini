import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm/index"
import { api } from "../../services/api";
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss";

export const RegisterPage = () => {
    const navigate = useNavigate();

    // const toastSuccess = (message) => {
    //     toast.success(message, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //     })
    // }

    // const toastError = (message) => {
    //     toast.error('🦄 Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //     });
    // }

    const userRegister = async (formData) => {
        try {
            const { data } = await api.post('/users', formData);
            navigate('/')
            // toastSuccess('Conta criada com sucesso')
        } catch (error) {
            // toastError('Ops! Algo deu errado')
        }
    }

    const backButtonClick = () => {
        navigate('/')
    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <img src={Logo} alt="Logo Kenzie Academy" />
                <button onClick={backButtonClick}>Voltar</button>
            </div>
            <div className={styles.registerContent}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <RegisterForm userRegister={userRegister} />
            </div>
        </div>
    )
}