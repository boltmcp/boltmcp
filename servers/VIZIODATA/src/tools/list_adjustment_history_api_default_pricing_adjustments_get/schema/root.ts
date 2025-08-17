import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(200).optional(),
  "offset": z.number().int().gte(0).optional(),
  "status": z.union([z.enum(["pending","processing","completed","failed"]).describe("Status do reajuste"), z.null()]).optional()
}