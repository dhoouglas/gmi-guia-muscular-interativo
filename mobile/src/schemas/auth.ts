import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string()
    .email("Por favor, insira um email válido.")
    .min(1, "O email é obrigatório."),
  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
