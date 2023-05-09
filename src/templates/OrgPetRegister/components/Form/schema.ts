import { z } from "zod";

export const registerPetSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome do animal é um campo obrigatório." }),

  description: z
    .string()
    .min(1, { message: "Descrição é um campo obrigatório." })
    .max(300, { message: "Máximo de 300 caracteres." }),

  age: z.string({ required_error: "Idade é um campo obrigatório" }),
  size: z.string({ required_error: "Tamanho é um campo obrigatório" }),
  independency_level: z.string({
    required_error: "Nível de independência é um campo obrigatório",
  }),
  energy_level: z.string({
    required_error: "Nível de energia é um campo obrigatório.",
  }),
  ambient: z.string({
    required_error: "Ambiente é um campo obrigatório.",
  }),
  type: z.string({
    required_error: "Tipo é um campo obrigatório.",
  }),

  requirements: z.array(
    z.object({
      value: z
        .string()
        .min(1, { message: "Requisito é um campo obrigatório." }),
    })
  ),
});

export type RegisterPetSchema = z.infer<typeof registerPetSchema>;
