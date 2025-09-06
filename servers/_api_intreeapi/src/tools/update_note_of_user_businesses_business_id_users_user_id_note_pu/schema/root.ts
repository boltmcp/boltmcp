import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "business_id": z.string().uuid(),
  "note": z.union([z.string(), z.null()]).optional()
}