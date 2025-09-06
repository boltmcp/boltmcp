import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional()
}