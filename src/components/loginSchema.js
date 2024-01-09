import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("Email é obrigatório").email("Digite um email válido"),
    password: z.string().nonempty("Senha é obrigatória").min(8,"É necessário pelo menos 8 caracteres"),
})