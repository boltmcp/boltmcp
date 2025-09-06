import { z } from "zod"

export const inputParamsSchema = {
  "invite_link_id": z.string().uuid(),
  "embed_cover_image": z.boolean().optional(),
  "embed_hub": z.boolean().optional(),
  "error_if_expired": z.boolean().optional()
}