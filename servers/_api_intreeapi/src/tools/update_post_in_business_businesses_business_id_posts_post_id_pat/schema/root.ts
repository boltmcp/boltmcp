import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "business_id": z.string().uuid(),
  "content": z.union([z.string().max(2000), z.null()]).optional()
}