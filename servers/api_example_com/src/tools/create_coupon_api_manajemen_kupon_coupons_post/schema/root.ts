import { z } from "zod"

export const inputParamsSchema = {
  "credits_amount": z.number(),
  "is_multi_use": z.boolean().optional(),
  "campaign_code": z.union([z.string(), z.null()]).optional(),
  "quantity": z.number().int().optional(),
  "authorization": z.string()
}