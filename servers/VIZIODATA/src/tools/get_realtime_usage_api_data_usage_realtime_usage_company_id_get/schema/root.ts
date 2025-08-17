import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "period": z.union([z.string(), z.null()]).describe("Period YYYY-MM (default: current month)").optional()
}