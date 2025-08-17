import { z } from "zod"

export const inputParamsSchema = {
  "work_order_id": z.string().uuid(),
  "page": z.number().int().gte(1).describe("Número da página").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Itens por página").optional()
}