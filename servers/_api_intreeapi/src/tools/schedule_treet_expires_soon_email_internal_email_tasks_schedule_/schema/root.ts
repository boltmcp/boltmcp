import { z } from "zod"

export const inputParamsSchema = {
  "valid_from": z.string().datetime({ offset: true }),
  "expires_at": z.string().datetime({ offset: true }),
  "treet_id": z.string().uuid(),
  "hub_id": z.string().uuid(),
  "treet_name": z.string(),
  "cover_image_url": z.union([z.string(), z.null()]).optional()
}