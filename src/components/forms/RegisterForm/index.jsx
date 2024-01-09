import { useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../registerSchema";
import styles from "./style.module.scss";

export const RegisterForm = ({ userRegister }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const submit = (formData) => {
        userRegister(formData);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.registerForm}>
            <Input label="Nome:" type="text" placeholder="Digite aqui seu nome" {...register("name")} error={errors.name} />
            <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email} />
            <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />
            <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} error={errors.confirmPassword} />
            <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} error={errors.bio} />
            <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} error={errors.contact} />
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
                <option value="">Selecionar Módulo</option>
                <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo - Introdução ao Frontend</option>
                <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo - Frontend Avançado</option>
                <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo - Introdução ao Backend</option>
                <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo - Backend Avançado</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    )
}