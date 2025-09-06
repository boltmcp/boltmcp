import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "business_id": z.string().uuid(),
  "timeout_duration_minutes": z.union([z.number().int().gte(1).lte(10512000), z.null()]).describe("Duration of the timeout. If null then it is infinite.").optional(),
  "reason": z.union([z.string().max(500), z.null()]).optional()
}