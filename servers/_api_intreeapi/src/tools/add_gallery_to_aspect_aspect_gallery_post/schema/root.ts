import { z } from "zod"

export const inputParamsSchema = {
  "aspect_id": z.string().uuid(),
  "gallery_ids": z.array(z.string().uuid()).min(1).max(30)
}