import { z } from "zod";

export const registerSchema = z
  .object({
    responsible_name: z
      .string()
      .min(1, { message: "Nome do responsável é um campo obrigatório." }),

    email: z
      .string()
      .min(1, { message: "E-mail é um campo obrigatório." })
      .email({
        message: "Deve ser um e-mail válido.",
      }),

    postal_code: z.string().min(8, { message: "CEP é um campo obrigatório." }),

    address: z.string(),

    neighborhood: z.string(),

    city: z.string(),

    state: z.string(),

    number: z.string().min(1, {
      message: "Número é um campo obrigatório.",
    }),

    whatsapp_number: z
      .string()
      .min(1, { message: "Número de whatsapp é um campo obrigatório." }),

    password: z.string().min(8, { message: "Senha é um campo obrigatório." }),

    confirmPassword: z
      .string()
      .min(8, { message: "Confirmação de senha é um campo obrigatório." }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "As senhas devem coincidir.",
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
