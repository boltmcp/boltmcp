import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.number().int(),
  "date": z.string().date(),
  "entryType": z.enum(["breakfast","lunch","dinner","side"]).optional(),
  "title": z.string().optional(),
  "text": z.string().optional(),
  "recipeId": z.union([z.string().uuid(), z.null()]).optional(),
  "id": z.number().int(),
  "groupId": z.string().uuid(),
  "userId": z.string().uuid(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}