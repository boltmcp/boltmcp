import { z } from "zod"

export const inputParamsSchema = {
  "days": z.number().int().gte(1).lte(90).describe("Number of days to analyze").optional()
}