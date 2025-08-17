import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string(), z.null()]).describe("Company ID").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start date").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End date").optional(),
  "billing_period": z.union([z.string(), z.null()]).describe("Billing period (YYYY-MM)").optional(),
  "detailed": z.boolean().describe("Return detailed statistics with top users and endpoints").optional()
}