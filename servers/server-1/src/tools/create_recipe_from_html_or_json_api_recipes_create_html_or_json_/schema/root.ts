import { z } from "zod"

export const inputParamsSchema = {
  "includeTags": z.boolean().optional(),
  "data": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}