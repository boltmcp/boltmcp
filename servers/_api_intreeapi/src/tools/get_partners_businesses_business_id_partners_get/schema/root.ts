import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "partnership_id": z.union([z.string().uuid(), z.null()]).describe("Filter by BizPartnership ID.").optional(),
  "partner_id": z.union([z.string().uuid(), z.null()]).describe("Filter by  the other partner's business ID. Cannot be the current business.").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search on the partner's business profile title.").optional(),
  "embed_logo_image": z.boolean().optional(),
  "embed_cover_image": z.boolean().optional(),
  "embed_contacts": z.boolean().describe("Embed the contacts of each business.").optional(),
  "embed_member_count": z.boolean().describe("Embed amount of members for each business.").optional(),
  "embed_shared_treets_count": z.boolean().describe("Embed number of treets this business has shared with or received by the partner.").optional(),
  "embed_active_users": z.boolean().describe("Embed number of active users who have access to treets from provider business.").optional(),
  "embed_lifetime_redeems": z.boolean().describe("Embed lifetime redeems of treets shared with partner.").optional(),
  "embed_weekly_distributes_made": z.boolean().describe("Embed amount of weekly distributes made to groups owned by the other partner.").optional()
}