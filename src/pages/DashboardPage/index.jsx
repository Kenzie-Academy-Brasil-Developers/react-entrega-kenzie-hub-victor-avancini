import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const DashboardPage = ({ user, token }) => {

    const navigate = useNavigate();

      const exitButtonClick = () => {
        navigate('/')
    }

    return (
        <div className={styles.dashboardContainer}>
            <nav>
                <img src={Logo} alt="Logo Kenzie Academy" />
                <button onClick={exitButtonClick}>Sair</button>
            </nav>
            <header>
                <h1>Olá, {user.name}</h1>
                <p>{user.course_module}</p>
            </header>
            <main>
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </div>
    )
}