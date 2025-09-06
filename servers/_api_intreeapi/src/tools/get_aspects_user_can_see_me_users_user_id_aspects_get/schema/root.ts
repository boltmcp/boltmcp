import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_icon_image": z.boolean().optional(),
  "embed_cover_image": z.boolean().optional(),
  "embed_recent_posts": z.boolean().optional(),
  "embed_preview_members": z.boolean().optional(),
  "embed_gallery": z.boolean().optional()
}