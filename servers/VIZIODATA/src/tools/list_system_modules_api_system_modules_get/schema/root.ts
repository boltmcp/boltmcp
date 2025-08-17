import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Número da página").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Itens por página").optional(),
  "search": z.union([z.string(), z.null()]).describe("Buscar por nome ou chave").optional(),
  "category": z.union([z.string(), z.null()]).describe("Filtrar por categoria").optional(),
  "available_only": z.boolean().describe("Apenas módulos disponíveis").optional()
}