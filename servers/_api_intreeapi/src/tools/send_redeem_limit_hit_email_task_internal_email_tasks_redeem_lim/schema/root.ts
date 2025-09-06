import { z } from "zod"

export const inputParamsSchema = {
  "treet_name": z.string(),
  "hub_id": z.string().uuid(),
  "cover_image_url": z.union([z.string(), z.null()]).optional()
}