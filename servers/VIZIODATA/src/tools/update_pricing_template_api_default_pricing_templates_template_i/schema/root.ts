import { z } from "zod"

export const inputParamsSchema = {
  "template_id": z.string(),
  "name": z.union([z.string().min(1).max(100), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "price_per_gb_input": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_gb_output": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_gb_storage": z.union([z.number().gte(0), z.null()]).optional(),
  "price_per_1k_requests": z.union([z.number().gte(0), z.null()]).optional(),
  "monthly_limit_gb": z.union([z.number().gte(0), z.null()]).optional(),
  "alert_threshold_percentage": z.union([z.number().gte(0).lte(100), z.null()]).optional(),
  "storage_billing_day": z.union([z.number().int().gte(1).lte(31), z.null()]).optional(),
  "is_default": z.union([z.boolean(), z.null()]).optional()
}