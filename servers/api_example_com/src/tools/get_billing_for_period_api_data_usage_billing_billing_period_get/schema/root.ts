import { z } from "zod"

export const inputParamsSchema = {
  "billing_period": z.string().describe("Billing period (YYYY-MM)"),
  "company_id": z.union([z.string(), z.null()]).describe("Company ID").optional()
}