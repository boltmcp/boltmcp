import { z } from "zod"

export const inputParamsSchema = {
  "recipe_id": z.union([z.string(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}