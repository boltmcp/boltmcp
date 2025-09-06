import { z } from "zod"

export const inputParamsSchema = {
  "schedule_id": z.union([z.string().uuid(), z.null()]).optional(),
  "business_id": z.union([z.string().uuid(), z.null()]).optional()
}