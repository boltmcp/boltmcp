import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid(),
  "page": z.number().int().gte(1).describe("Número da página").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Itens por página").optional(),
  "enabled_only": z.boolean().describe("Apenas módulos habilitados").optional()
}