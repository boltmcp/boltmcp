import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "name": z.union([z.string(), z.null()]).optional()
}