import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_icon_image": z.boolean().optional(),
  "embed_cover_image": z.boolean().optional(),
  "embed_recent_posts": z.boolean().optional(),
  "embed_owner": z.boolean().optional(),
  "embed_gallery": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by aspect id.").optional(),
  "owner_id": z.union([z.string().uuid(), z.null()]).describe("Filter by owner id.").optional(),
  "feed_preference": z.union([z.enum(["preferred","normal","hidden"]).describe("User's feed preference to an aspect.\n\n`preferred`: posts in this aspect will also appear in the user's preferred feed\n\n`normal`: posts in this aspect will appear in the user's normal feed\n\n`hidden`: posts in this aspect will not appear in the user's feed"), z.null()]).describe("Filter by feed preference.").optional()
}