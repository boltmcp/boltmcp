import { z } from "zod"

export const inputParamsSchema = {
  "biz_invite_id": z.string().uuid(),
  "embed_groups": z.boolean().optional(),
  "embed_total_members": z.boolean().optional(),
  "embed_total_passes": z.boolean().optional(),
  "embed_total_posts": z.boolean().optional()
}