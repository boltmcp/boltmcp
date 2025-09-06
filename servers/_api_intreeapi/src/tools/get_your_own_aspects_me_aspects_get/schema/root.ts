import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["desc(position)","asc(position)","desc(created_at)","asc(created_at)"]).describe("Sort by your own aspects.\n\n- `position`: sort by the custom position set by the user.\n- `created_at`: sort by created at").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_icon_image": z.boolean().optional(),
  "embed_cover_image": z.boolean().optional(),
  "embed_recent_posts": z.boolean().optional(),
  "embed_preview_members": z.boolean().optional(),
  "embed_gallery": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by aspect id.").optional()
}