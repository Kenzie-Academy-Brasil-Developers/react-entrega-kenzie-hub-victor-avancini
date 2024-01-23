import editTech from "../../../assets/editTech.svg";
import apagar from "../../../assets/delete.svg";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechCard = ({ tech }) => {
    const { openModalEdit, setEditingTech, deleteTechnology } = useContext(TechContext)

    const handleDeleteClick = () => {
        deleteTechnology(tech.id);
    }

    const handleEditClick = () => {
        openModalEdit()
        setEditingTech(tech)
    }

    return (
        <li>
            <h3>
                {tech.title}
            </h3>
            <div>
                <p>{tech.status}</p>
                <img src={editTech} alt="Editar Tecnologia" onClick={handleEditClick} />
                <img src={apagar} alt="Deletar Tecnologia" onClick={handleDeleteClick}/>
            </div>
        </li>
    )
}