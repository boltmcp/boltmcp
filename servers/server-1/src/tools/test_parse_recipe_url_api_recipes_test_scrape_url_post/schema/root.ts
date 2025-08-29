import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string(),
  "useOpenAI": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}