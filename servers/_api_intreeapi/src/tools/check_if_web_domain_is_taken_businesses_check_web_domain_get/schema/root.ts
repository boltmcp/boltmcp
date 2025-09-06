import { z } from "zod"

export const inputParamsSchema = {
  "web_domain": z.string().min(2).max(2047),
  "suggestions_num": z.number().int().gte(0).lte(10).describe("Maximum number of suggestions to return.").optional()
}