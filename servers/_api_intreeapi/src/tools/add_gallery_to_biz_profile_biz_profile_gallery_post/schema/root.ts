import { z } from "zod"

export const inputParamsSchema = {
  "biz_profile_id": z.string().uuid(),
  "gallery_ids": z.array(z.string().uuid()).min(1)
}