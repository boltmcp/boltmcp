import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "months": z.number().int().gte(1).lte(24).describe("Number of months to retrieve").optional()
}