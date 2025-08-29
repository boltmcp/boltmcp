import { z } from "zod"

export const inputParamsSchema = {
  "recipe_slug": z.string(),
  "group_slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}