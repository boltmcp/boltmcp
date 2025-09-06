import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "is_primary_link": z.union([z.boolean(), z.null()]).describe("Filter by whether the link is the primary link.").optional()
}