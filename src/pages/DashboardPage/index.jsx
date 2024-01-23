import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { Technologies } from "../../components/Tech"
import { useUserContext } from "../../providers/UserContext"
import { CreateTechModal } from "../../components/Tech/TechModal/CreateTechModal"
import { EditTechModal } from "../../components/Tech/TechModal/EditTechModal"
import { TechContext } from "../../providers/TechContext"
import { useContext } from "react"

export const DashboardPage = () => {
    const { user, userLogout } = useUserContext();
    const { isModalCreateOpen, isModalEditOpen } = useContext(TechContext)

    if (user) {
        return (
            <div className={styles.dashboardContainer}>
                <nav>
                    <img src={Logo} alt="Logo Kenzie Academy" />
                    <Link to={"/"} className={styles.exitButton} onClick={userLogout}>Sair</Link>
                </nav>
                <div className={styles.dashboardHeader}>
                    <header>
                        <h1>Olá, {user.name}</h1>
                        <p>{user.course_module}</p>
                    </header>
                </div>
                <main>
                    <Technologies />
                </main>
                <dialog>
                    {isModalCreateOpen ? <CreateTechModal /> : null}
                    {isModalEditOpen ? <EditTechModal /> : null}
                </dialog>
            </div>
        )
    }
}