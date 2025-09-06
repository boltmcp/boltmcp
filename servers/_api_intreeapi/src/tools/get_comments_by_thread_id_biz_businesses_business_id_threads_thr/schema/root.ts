import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().uuid(),
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_author": z.boolean().optional()
}