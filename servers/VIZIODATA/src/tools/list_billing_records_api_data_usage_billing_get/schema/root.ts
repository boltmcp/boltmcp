import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string(), z.null()]).describe("Company ID").optional(),
  "billing_period": z.union([z.string(), z.null()]).describe("Billing period (YYYY-MM)").optional(),
  "is_processed": z.union([z.boolean(), z.null()]).describe("Filter by processed status").optional()
}