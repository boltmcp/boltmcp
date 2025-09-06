import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)"]).describe("Sort by options for redeems.\n\n`title`: sort by the title of the redeemed treet\n`created_at`: sort by when the redeem was made").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "embed_hub": z.boolean().describe("Embed the hub owner of the Treet.").optional(),
  "embed_treet_code": z.boolean().optional(),
  "embed_cover_image": z.boolean().describe("Embed cover image from version of redeem.").optional(),
  "embed_schedule_data": z.boolean().optional(),
  "embed_cooldown_data": z.boolean().optional(),
  "embed_time_frame_data": z.boolean().optional(),
  "embed_locations": z.boolean().optional(),
  "embed_booking_data": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by id of Redeem.").optional(),
  "treet_id": z.union([z.string().uuid(), z.null()]).describe("Filter by Redeems made on Treet id.").optional(),
  "hub_id": z.union([z.string().uuid(), z.null()]).describe("Filter by hub id of Treet.").optional(),
  "category_id": z.union([z.array(z.string().uuid()), z.null()]).describe("ID of category to fetch treets with.").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search Redeems by: Treet title.").optional(),
  "pack_id": z.union([z.string().uuid(), z.null()]).describe("Filter by pack id of Treet.").optional()
}