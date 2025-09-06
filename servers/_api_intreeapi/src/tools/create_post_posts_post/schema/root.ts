import { z } from "zod"

export const inputParamsSchema = {
  "content": z.union([z.string().max(2000), z.null()]).optional(),
  "gallery_ids": z.union([z.array(z.string().uuid()).max(10), z.null()]).optional(),
  "aspect_ids": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "business_id": z.union([z.string().uuid(), z.null()]).optional()
}