import { z } from "zod"

export const inputParamsSchema = {
  "recipeId": z.string(),
  "text": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}