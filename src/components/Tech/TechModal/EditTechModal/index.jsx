import { useContext, useEffect } from "react"
import { TechContext } from "../../../../providers/TechContext"
import { useForm } from "react-hook-form";
import styles from "./style.module.scss"
import { Input } from "../../../forms/Input";
import close from "../../../../assets/x.png"

export const EditTechModal = () => {
    const { editingTech, editTechnology, closeModalEdit } = useContext(TechContext)
    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status
        }
    });

    const submit = (formData) => {
        editTechnology(formData.status)
    }

    return (
        <div className={styles.edit_tech_container}>
            <div className={styles.edit_tech_title}>
                <h3>Tecnologia Detalhes</h3>
                <img src={close} alt="Fechar modal" onClick={closeModalEdit} />
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome:" type="text" placeholder="Digite a tecnologia" {...register("title")} />
                <label>Status</label>
                <select {...register("status")}>
                    <option value="">Selecionar Status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    )
}