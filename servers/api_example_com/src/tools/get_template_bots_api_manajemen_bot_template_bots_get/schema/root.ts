import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).optional(),
  "limit": z.number().int().gte(1).optional(),
  "authorization": z.string()
}