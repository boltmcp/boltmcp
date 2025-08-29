import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}