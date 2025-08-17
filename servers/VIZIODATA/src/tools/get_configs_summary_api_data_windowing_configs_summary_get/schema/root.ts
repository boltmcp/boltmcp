import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string().uuid(), z.null()]).describe("Filtrar por empresa").optional()
}