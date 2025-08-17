import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid(),
  "price_per_gb_input": z.number().gte(0).optional(),
  "price_per_gb_output": z.number().gte(0).optional(),
  "price_per_gb_storage": z.number().gte(0).optional(),
  "price_per_1k_requests": z.number().gte(0).optional(),
  "currency": z.string().max(3).optional(),
  "monthly_limit_gb": z.union([z.number().gte(0), z.null()]).optional(),
  "alert_threshold_percentage": z.number().gte(0).lte(100).optional(),
  "storage_calculation_type": z.string().regex(new RegExp("^(snapshot|accumulated)$")).optional(),
  "storage_billing_day": z.number().int().gte(1).lte(31).optional()
}