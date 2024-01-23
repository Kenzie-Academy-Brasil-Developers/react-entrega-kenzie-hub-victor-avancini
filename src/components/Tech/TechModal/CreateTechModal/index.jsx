import { useForm } from "react-hook-form"
import close from "../../../../assets/x.png"
import { useContext } from "react";
import { Input } from "../../../forms/Input";
import { TechContext } from "../../../../providers/TechContext";
import styles from "./style.module.scss"

export const CreateTechModal = () => {
    const { addTechnology, closeModalCreate } = useContext(TechContext);
    const { register, handleSubmit } = useForm();

    const submit = (FormData) => {
        addTechnology(FormData)
    }

    return (
        <div className={styles.create_tech_container}>
            <div className={styles.create_tech_title}>
                <h3>Cadastrar Tecnologia</h3>
                <img src={close} alt="Fechar modal" onClick={closeModalCreate} />
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome:" type="text" placeholder="Digite a tecnologia" {...register("title")} />
                <label>Selecionar Status</label>
                <select {...register("status")}>
                    <option value="">Selecionar Status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button type="submit">Cadastrar Tecnologia</button>
            </form>
        </div>
    )
}