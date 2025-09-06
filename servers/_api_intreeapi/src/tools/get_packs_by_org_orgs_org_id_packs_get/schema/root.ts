import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(price)","desc(price)","asc(claim_count)","desc(claim_count)"]).describe("Sort by options for pass for org.\n\n- `title`: sort by the title of the pass.\n- `created_at`: sort by when the pass is created.\n- `price`: sort by the price of the pass.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "pack_type": z.union([z.enum(["basic","ambassador"]).describe("Type of pack.\n\n- `basic`: does not allow treet sharing\n- `ambassador`: allows for treet sharing"), z.null()]).optional(),
  "embed_treet_count": z.boolean().optional(),
  "embed_treet_owner_avatars": z.boolean().optional(),
  "embed_member_count": z.boolean().optional(),
  "embed_claim_count": z.boolean().optional(),
  "embed_origin_business": z.boolean().optional()
}