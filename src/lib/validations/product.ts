import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Informe um título válido."),
  description: z.string().optional(),
  categoryId: z.uuid("Selecione uma categoria."),
  price: z.coerce.number().positive("O preço deve ser maior que zero."),
  sizes: z.array(
    z.object({
      size: z.string().min(1),
      stock: z.coerce.number().int().min(0),
    })
  ).min(1, "Cadastre pelo menos um tamanho."),
  active: z.boolean().default(true),
});

export type ProductFormData = z.infer<typeof productSchema>;