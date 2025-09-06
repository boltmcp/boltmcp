import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "expires_at": z.union([z.string(), z.null()]).optional(),
  "limit": z.union([z.number().int().gt(0).lte(100000), z.null()]).describe("Limit for number of times the link can be used.").optional()
}