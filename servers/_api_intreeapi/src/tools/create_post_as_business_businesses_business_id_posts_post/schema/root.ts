import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "content": z.union([z.string().max(2000), z.null()]).optional(),
  "gallery_ids": z.union([z.array(z.string().uuid()).max(10), z.null()]).optional(),
  "created_at": z.union([z.string(), z.null()]).optional()
}