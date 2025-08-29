import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "includeTags": z.boolean().optional(),
  "url": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}