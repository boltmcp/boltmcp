import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Número da página").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Itens por página").optional(),
  "config_id": z.union([z.string().uuid(), z.null()]).describe("Filtrar por configuração").optional(),
  "company_id": z.union([z.string().uuid(), z.null()]).describe("Filtrar por empresa").optional(),
  "state": z.union([z.enum(["waiting","active","completed","cancelled"]).describe("Estados da janela"), z.null()]).describe("Filtrar por estado").optional(),
  "is_baseline": z.union([z.boolean(), z.null()]).describe("Apenas baselines").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data inicial").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data final").optional()
}