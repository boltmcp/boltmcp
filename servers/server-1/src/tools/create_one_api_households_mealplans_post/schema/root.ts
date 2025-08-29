import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date(),
  "entryType": z.enum(["breakfast","lunch","dinner","side"]).optional(),
  "title": z.string().optional(),
  "text": z.string().optional(),
  "recipeId": z.union([z.string().uuid(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}