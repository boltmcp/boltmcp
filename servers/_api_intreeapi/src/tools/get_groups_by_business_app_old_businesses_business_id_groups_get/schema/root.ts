import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(join_date)","desc(join_date)","desc(newest_first)"]).describe("Sort by options for packs for app.\n\n- `title`: sort by the title of the pack.\n- `join_date`: sort by when the user joined the pack.\n- `newest_first`: get the newest joined or applied packs first.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search for the title of the Group.").optional(),
  "is_member": z.union([z.boolean(), z.null()]).describe("To show groups where current user is or is not member").optional(),
  "embed_treet_count": z.boolean().optional(),
  "embed_treet_owner_avatars": z.boolean().optional(),
  "embed_featured_treets": z.boolean().optional()
}