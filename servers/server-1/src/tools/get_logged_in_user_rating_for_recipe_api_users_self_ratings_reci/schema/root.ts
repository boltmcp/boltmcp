import { z } from "zod"

export const inputParamsSchema = {
  "recipe_id": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}