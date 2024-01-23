import { useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../loginSchema";
import styles from "./style.module.scss"
import { useUserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
    const { userLogin } = useUserContext();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const submit = (formData) => {
        userLogin(formData);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.loginForm}>
            <Input label="Email" type="email" placeholder="E-mail" {...register("email")} error={errors.email} />
            <Input label="Senha" type="password" placeholder="Senha" {...register("password")} error={errors.password} />
            <button type="submit">Entrar</button>
        </form>
    )
}