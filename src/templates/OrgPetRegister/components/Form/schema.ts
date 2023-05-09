import { z } from "zod";

export const registerPetSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome da organização é um campo obrigatório." }),
  requirements: z.array(
    z.object({
      requirement: z
        .string()
        .min(1, { message: "Requisito é um campo obrigatório." }),
    })
  ),
});

export type RegisterPetSchema = z.infer<typeof registerPetSchema>;
