import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "billing_period": z.string().describe("Billing period (YYYY-MM)"),
  "contracted_credits": z.union([z.number(), z.null()]).optional(),
  "auto_renew": z.union([z.boolean(), z.null()]).optional(),
  "notification_thresholds": z.union([z.string(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional()
}