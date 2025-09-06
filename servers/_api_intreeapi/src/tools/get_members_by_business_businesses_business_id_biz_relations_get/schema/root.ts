import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_aspects": z.boolean().optional(),
  "user_id": z.union([z.string().uuid(), z.null()]).optional(),
  "role": z.union([z.enum(["owner","moderator","member"]).describe("Role of a BizRelation.\n\n`owner`: the owner of the Business\n\n`moderator`: a moderator of the Business\n\n`member`: a member of the Business"), z.null()]).optional(),
  "search": z.union([z.string().min(1).max(100), z.null()]).describe("Search string for full name of contact.").optional()
}