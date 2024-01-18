import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const DashboardPage = ({ user, token }) => {
    return (
        <div className={styles.dashboardContainer}>
            <nav>
                <img src={Logo} alt="Logo Kenzie Academy" />
                <Link to={"/"} className={styles.button}>Sair</Link>
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