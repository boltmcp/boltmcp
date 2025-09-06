import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(total_members)","desc(total_members)","asc(total_treets)","desc(total_treets)","asc(price)","desc(price)"]).describe("Sort by options for packs for hub.\n\n- `title`: sort by the title of the pack.\n- `created_at`: sort by when the pack is created.\n- `total_members`: sort by the amount of members in the pack.\n- `total_treets`: sort by the amount of treets in the pack.\n- `price`: sort by the price of the pack.").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "treet_id": z.union([z.string().uuid(), z.null()]).optional(),
  "treet_access_role": z.union([z.enum(["read","write"]).describe("The access role of a Hub member in terms of Treet access.\n\nThis is simplified compared to the main Hub roles, as here we only\ncare about access to Treets.\n\n- `write`: roles that can write to the hub\n- `read`: roles that can only read from the hub"), z.null()]).optional(),
  "inverse_treet_filter": z.boolean().describe("If true and treet_id is given, it will return all packs not containing treet. If false and treet_id is given only shows packs containing treet.").optional(),
  "include_draft": z.boolean().describe("If true includes draft packs. If false does not include draft packs. Default is false.").optional(),
  "treet_amount": z.union([z.number().int(), z.null()]).describe("If set, will return packs based on treet_amount_comparator.").optional(),
  "treet_amount_comparator": z.enum(["greater","equal","less"]).describe("Comparator for amount of treets (tac). When treets_amount is set and a pack has x treets it will return packs that have `treet_amount (tac) x` for example `10 > x` will give packs with more than 10 treets.").optional(),
  "hub_id": z.union([z.array(z.string().uuid()), z.null()]).describe("Filter by owner of pack. If not given, no filter is applied").optional(),
  "category_id": z.union([z.array(z.string().uuid()), z.null()]).describe("ID of category to fetch treets with.").optional(),
  "title": z.union([z.string(), z.null()]).describe("Filter by title of pack. If not given, no filter is applied.").optional(),
  "total_treets_get_expired": z.union([z.boolean(), z.null()]).describe("If true it will only count expired Treets. If false it will only count active Treets. If not given, no filter is applied. The filter will only be applied if embedding total_treets. This filter will also affect the treet_amount filter and the values used when sorting by amount of treets.").optional(),
  "total_treets_get_archived": z.union([z.boolean(), z.null()]).describe("If true it will only count archived Treets. If false it will count active and archived Treets. If not given, no filter is applied. The filter will only be applied if embedding total_treets. This filter will also affect the treet_amount filter and the values used when sorting by amount of treets.").optional(),
  "medium_threshold_expires_at": z.union([z.number().int().gte(0).lte(100000), z.null()]).describe("Threshold for expires at in days to be medium.").optional(),
  "critical_threshold_expires_at": z.union([z.number().int().gte(0).lte(100000), z.null()]).describe("Threshold for expires at in days to be critical.").optional(),
  "medium_threshold_redeems_left": z.union([z.number().int().gte(0).lte(100), z.null()]).describe("Threshold for redeems left as a percentage to be medium. Ex: if 20, then for redeem limit of 10 and 2 redeems left (2/10=20%), it will be medium. But redeem limit of 5 and 2 redeems left (2/5=40%) is not.").optional(),
  "critical_threshold_redeems_left": z.union([z.number().int().gte(0).lte(100), z.null()]).describe("Threshold for redeems left as a percentage to be critical. Ex: if 20, then for redeem limit of 10 and 2 redeems left (2/10=20%), it will be critical. But redeem limit of 5 and 2 redeems left (2/5=40%) is not.").optional(),
  "treet_share_access": z.union([z.array(z.enum(["none","one_level","reshares"]).describe("The access level of a Treet share for packs.\n\n- `none`: Only members can receive treets from the pack\n- `one_level`: Members can share treets from the pack\n- `reshares`: Users receiving treets from anyone can share them")), z.null()]).describe("Treet share access the pack should have.").optional(),
  "embed_total_treets": z.boolean().describe("Amount of treets in pack. Must be true when sorting by it.").optional(),
  "embed_total_members": z.boolean().describe("Amount of members in pack. Must be true when sorting by it.").optional(),
  "embed_featured_treets": z.boolean().describe("Embed featured treets in pack.").optional(),
  "embed_hub": z.boolean().describe("Embed the hub owner of the Pack.").optional()
}