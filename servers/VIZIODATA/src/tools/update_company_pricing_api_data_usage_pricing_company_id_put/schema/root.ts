import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "price_per_gb_input": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_gb_output": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_gb_storage": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_1k_requests": z.union([z.number().gte(0), z.null()]).optional(),
  "monthly_limit_gb": z.union([z.number().gte(0), z.null()]).optional(),
  "alert_threshold_percentage": z.union([z.number().gte(0).lte(100), z.null()]).optional(),
  "storage_calculation_type": z.union([z.string().regex(new RegExp("^(snapshot|accumulated)$")), z.null()]).optional(),
  "storage_billing_day": z.union([z.number().int().gte(1).lte(31), z.null()]).optional()
}