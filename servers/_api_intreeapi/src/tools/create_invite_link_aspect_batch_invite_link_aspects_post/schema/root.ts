import { z } from "zod"

export const inputParamsSchema = {
  "aspect_ids": z.array(z.string().uuid()),
  "invite_link_id": z.string().uuid()
}