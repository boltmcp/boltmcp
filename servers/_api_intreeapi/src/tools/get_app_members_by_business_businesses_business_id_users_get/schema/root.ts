import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "sort_by": z.enum(["full_name","created_at"]).describe("Sort by for AppMember.\n\n`full_name`: sort by full name\n\n`created_at`: sort by created at").optional(),
  "embed_group_members": z.boolean().optional(),
  "embed_redeems": z.boolean().optional(),
  "embed_shares": z.boolean().optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "offset": z.number().int().gte(0).optional(),
  "group_id": z.union([z.string().uuid(), z.null()]).describe("Filter by group ID.").optional(),
  "search": z.union([z.string().min(1).max(100), z.null()]).describe("Search for an ambassador by full name.").optional()
}