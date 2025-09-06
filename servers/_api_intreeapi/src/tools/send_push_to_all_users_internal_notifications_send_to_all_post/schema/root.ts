import { z } from "zod"

export const inputParamsSchema = {
  "batch_size": z.number().int().gte(1).lte(1000).optional(),
  "title": z.string(),
  "body": z.string()
}