import { z } from "zod";

export const registerPetSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome do animal é um campo obrigatório." }),

  about: z
    .string()
    .min(1, { message: "Sobre é um campo obrigatório." })
    .max(300, { message: "Máximo de 300 caracteres." }),

  requirements: z.array(
    z.object({
      value: z
        .string()
        .min(1, { message: "Requisito é um campo obrigatório." }),
    })
  ),
});

export type RegisterPetSchema = z.infer<typeof registerPetSchema>;
