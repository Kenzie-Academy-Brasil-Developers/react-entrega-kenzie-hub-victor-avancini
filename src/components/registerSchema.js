import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("Email é obrigatório").email("Digite um email válido"),
    password: z.string().nonempty("Senha é obrigatória").min(8, "É necessário pelo menos 8 caracteres").regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula").regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula").regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
    bio: z.string().nonempty("Bio é obrigatório"),
    contact: z.string().nonempty("Contato é obrigatório"),
    course_module: z.string().nonempty("Módulo é obrigatório"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
});