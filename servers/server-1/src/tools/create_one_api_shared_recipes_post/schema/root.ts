import { z } from "zod"

export const inputParamsSchema = {
  "recipeId": z.string(),
  "expiresAt": z.string().datetime({ offset: true }).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}