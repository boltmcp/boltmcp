import { z } from "zod"

export const inputParamsSchema = {
  "pack_id": z.string().uuid(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(received_at)","desc(received_at)","asc(expires_at)","desc(expires_at)","asc(redeems_left)","desc(redeems_left)","asc(shares_left)","desc(shares_left)"]).describe("Sort by for Treets in app.\n\n- `title`: title of the current version of the Treet.\n- `created_at`: when the Treet is created.\n- `received_at`: when the Treet was received by the current user.\n- `expires_at`: when the Treet expires.\n- `redeems_left`: the amount of redeems left.\n- `shares_left`: the amount of shares left.\n\nNote that when not sorting by created_at, desc(created_at) is used as tiebreaker.\nAlso note that null values will be sorted last when asc and first when desc.").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "embed_hub": z.boolean().describe("Embed the hub owner of the Treet.").optional(),
  "embed_cover_image": z.boolean().optional(),
  "embed_gallery": z.boolean().optional(),
  "embed_schedule_data": z.boolean().optional(),
  "embed_cooldown_data": z.boolean().optional(),
  "embed_time_frame_data": z.boolean().optional(),
  "embed_locations": z.boolean().optional(),
  "embed_shared_by_ids": z.boolean().optional(),
  "embed_reservation_data": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "redeem_limit_hit": z.union([z.boolean(), z.null()]).describe("If true, only returns treets with their redeem limit hit. If false, only returns treets that have not hit their redeem limit.If not given, both fully redeemed and not treets are returned.").optional(),
  "is_upcoming": z.union([z.boolean(), z.null()]).describe("If `true` only upcoming treets are returned. If `false` only treets that are not upcoming are returned. If not set: upcoming and not upcoming treets are returned.").optional(),
  "category_id": z.union([z.array(z.string().uuid()), z.null()]).describe("ID of category to fetch treets with.").optional()
}