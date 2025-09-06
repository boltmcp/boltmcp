import { z } from "zod"

export const inputParamsSchema = {
  "link": z.string().min(8),
  "embed_groups": z.boolean().optional(),
  "embed_total_members": z.boolean().optional(),
  "embed_total_passes": z.boolean().optional(),
  "embed_total_posts": z.boolean().optional()
}