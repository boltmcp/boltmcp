import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_user": z.boolean().optional(),
  "embed_aspects": z.boolean().optional(),
  "search": z.union([z.string().min(1).max(100), z.null()]).describe("Search string for full name of contact.").optional()
}