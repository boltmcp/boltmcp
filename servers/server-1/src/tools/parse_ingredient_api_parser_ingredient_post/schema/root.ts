import { z } from "zod"

export const inputParamsSchema = {
  "parser": z.enum(["nlp","brute","openai"]).optional(),
  "ingredient": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}