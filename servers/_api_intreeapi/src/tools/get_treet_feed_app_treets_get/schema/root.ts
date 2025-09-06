import { z } from "zod"

export const inputParamsSchema = {
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
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by Treet ID.").optional(),
  "hub_id": z.union([z.string().uuid(), z.null()]).describe("Filter on the hub who made the treet.").optional(),
  "pack_id": z.union([z.string().uuid(), z.null()]).describe("Filter only Treet that are in the given pack.").optional(),
  "is_shared": z.union([z.boolean(), z.null()]).describe("If true, only returns treets that have been shared with user. If false, only returns treets that have not been shared with user. If not set: both shared and not shared treets are returned.").optional(),
  "is_shared_by_current_user": z.union([z.boolean(), z.null()]).describe("If true, only returns treets that have been shared by user. If false, only returns treets that have not been shared by user. If not set: both shared and not shared treets are returned.").optional(),
  "share_limit_hit": z.union([z.boolean(), z.null()]).describe("If true, only returns treets that have hit their share limit If false, only returns treets that have not hit their share limit. If not given, both fully shared and not treets are returned.").optional(),
  "can_user_share": z.union([z.boolean(), z.null()]).describe("If true, only returns treets that are sharable by user. If false only returns treets that are not sharable by current user. If not given, both sharable and not sharable treets are returned.").optional(),
  "is_hidden": z.boolean().describe("Filter on whether the user has hidden the treet. If `true` only hidden treets are returned. If `false` only treets that are not hidden are returned.").optional(),
  "is_saved": z.union([z.boolean(), z.null()]).describe("If true, only returns treets that the user has saved. Otherwise returns all treets. This will place reserved treets first.").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search Treets by: Treet title; Title of hub owner of treet.").optional(),
  "redeem_limit_hit": z.union([z.boolean(), z.null()]).describe("If true, only returns treets with their redeem limit hit. If false, only returns treets that have not hit their redeem limit.If not given, both fully redeemed and not treets are returned.").optional(),
  "is_upcoming": z.union([z.boolean(), z.null()]).describe("If `true` only upcoming treets are returned. If `false` only treets that are not upcoming are returned. If not set: upcoming and not upcoming treets are returned.").optional(),
  "category_id": z.union([z.array(z.string().uuid()), z.null()]).describe("ID of category to fetch treets with.").optional()
}