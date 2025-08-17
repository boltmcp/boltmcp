import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "billing_period": z.union([z.string(), z.null()]).describe("Billing period (YYYY-MM), defaults to current").optional()
}