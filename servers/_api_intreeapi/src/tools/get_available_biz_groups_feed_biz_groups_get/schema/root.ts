import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(total_members)","desc(total_members)","asc(total_treets)","desc(total_treets)","asc(price)","desc(price)","asc(join_date)","desc(join_date)"]).describe("Sort by options for packs for app.\n\n- `title`: sort by the title of the pack.\n- `created_at`: sort by when the pack is created.\n- `total_members`: sort by the amount of members in the pack.\n- `total_treets`: sort by the amount of treets in the pack.\n- `price`: sort by the price of the pack.\n- `join_date`: sort by when the user joined the pack.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "search": z.union([z.string(), z.null()]).describe("Filter by title of pack. If not given, no filter is applied.").optional(),
  "is_member": z.union([z.boolean(), z.null()]).describe("If true, only returns packs that the user is a member of. If false, only returns packs that the user is not a member of. If not given, all packs are returned.").optional(),
  "is_member_first": z.union([z.boolean(), z.null()]).describe("If true, will show packs where current user is member first. If false, will show packs where current user is not member first. The sort_by will be applied to the packs where member and the packs where member separately. If not given, will only follow sort_by.").optional(),
  "category_id": z.array(z.string().uuid()).describe("ID of category to fetch treets with.").optional(),
  "embed_treet_count": z.boolean().optional(),
  "embed_treet_owner_avatars": z.boolean().optional(),
  "embed_origin_business": z.boolean().optional(),
  "embed_total_members": z.boolean().describe("Amount of members in group. Must be true when sorting by it.").optional(),
  "embed_subscription_data": z.boolean().describe("Embed subscription data if pack require subscriptions. Otherwise, for free or one-time packs, it will be null.").optional(),
  "embed_featured_treets": z.boolean().describe("Embed featured treets.").optional()
}