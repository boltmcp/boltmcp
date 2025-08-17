import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid(),
  "billing_period": z.string(),
  "contracted_credits": z.number(),
  "auto_renew": z.boolean().optional(),
  "notification_thresholds": z.string().optional(),
  "currency": z.string().optional()
}