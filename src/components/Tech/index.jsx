import { useContext } from "react"
import ButtonPlus from "../../assets/ButtonPlus.svg"
import { TechList } from "./TechList"
import styles from "./style.module.scss"
import { TechContext } from "../../providers/TechContext"

export const Technologies = () => {
    const { openModalCreate } = useContext(TechContext)

    return (
        <div className={styles.TechContainer}>
            <aside>
                <h2>Tecnologias</h2>
                <img src={ButtonPlus} alt="Botão adicionar tecnologia" className={styles.addButton} onClick={openModalCreate} />
            </aside>
            <TechList/>
        </div>
    )
}