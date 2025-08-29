import { z } from "zod"

export const inputParamsSchema = {
  "tag_slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}